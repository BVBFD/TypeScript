// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!💩') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents🗒';
}

function closeFile(fileName: string) {
  //
}
function run() {
  const fileName = 'not exist!💩';
  const file = 'file';

  try {
    console.log(readFile(file));
  } catch (error) {
    console.log(`catched!!`);
    return;
    // return이 되더라도 finally 안의 구문은 실행된다.
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}
run();
