// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!๐ฉ') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents๐';
}

function closeFile(fileName: string) {
  //
}
function run() {
  const fileName = 'not exist!๐ฉ';
  const file = 'file';

  try {
    console.log(readFile(file));
  } catch (error) {
    console.log(`catched!!`);
    return;
    // return์ด ๋๋๋ผ๋ finally ์์ ๊ตฌ๋ฌธ์ ์คํ๋๋ค.
  } finally {
    closeFile(fileName);
    console.log(`closed!`);
  }
}
run();
