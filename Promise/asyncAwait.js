// 각 단계를 시뮬레이션하는 함수들
function grindBeans() {
  return new Promise((resolve) => {
    console.log("원두 갈기 시작...");
    setTimeout(() => {
      console.log("원두 갈기 완료");
      resolve();
    }, 2000); // 2초 소요
  });
}

function brewCoffee() {
  return new Promise((resolve) => {
    console.log("커피 내리기 시작...");
    setTimeout(() => {
      console.log("커피 내리기 완료");
      resolve();
    }, 3000); // 3초 소요
  });
}

function pourInCup() {
  return new Promise((resolve) => {
    console.log("컵에 따르기 시작...");
    setTimeout(() => {
      console.log("컵에 따르기 완료");
      resolve();
    }, 1000); // 1초 소요
  });
}

// 메인 비동기 함수
async function makeCoffee() {
  console.log("커피 만들기 시작");

  await grindBeans();
  await brewCoffee();
  await pourInCup();

  console.log("커피 완성");
  return "에스프레소"; // 만든 커피 종류 반환
}

// 커피 만들기 실행
async function startCoffeeMaking() {
  console.log("주문 받음");
  const coffeeType = await makeCoffee();
  console.log(`${coffeeType} 준비 완료!`);
}

startCoffeeMaking();
