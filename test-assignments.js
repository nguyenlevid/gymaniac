const { execSync } = require('child_process');
const fs = require('fs');

const studentName = process.argv[2];

if (!studentName) {
  console.error('❌ Please provide a student name.');
  console.log('👉 Usage: npm run test:student <StudentName>');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync('test-assignments.json', 'utf-8'));
const assignments = config[studentName];

if (!assignments || assignments.length === 0) {
  const available = Object.keys(config);
  console.error(`❌ No tests assigned for "${studentName}".`);
  console.log(`👉 Available students: ${available.join(' | ')}`);
  process.exit(1);
}

console.log(`▶ Running tests for ${studentName}...\n`);

let hadFailures = false;

assignments.forEach(({ file, tests }) => {
  if (!tests || tests.length === 0) {
    const cmd = `npx vitest run ${file}`;
    console.log(`➤ ${cmd}`);
    try {
      execSync(cmd, { stdio: 'inherit' });
    } catch (error) {
      console.warn(`❌ Tests failed in ${file}`);
      hadFailures = true;
    }
  } else {
    tests.forEach((testName) => {
      const cmd = `npx vitest run ${file} -t="${testName}"`;
      console.log(`➤ ${cmd}`);
      try {
        execSync(cmd, { stdio: 'inherit' });
      } catch (error) {
        console.warn(`❌ Test "${testName}" failed in ${file}`);
        hadFailures = true;
      }
    });
  }
});

if (hadFailures) {
  console.error(`\n💥 Some tests failed for ${studentName}. Please fix and re-run.\n`);
  process.exit(1);
} else {
  console.log(`\n✅ All tests passed for ${studentName}! Great job!`);
}
