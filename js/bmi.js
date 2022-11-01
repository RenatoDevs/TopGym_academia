const calc = document.querySelector('#bt-calc');

const slideValueHeight = document.querySelector('#height-number');
const inputSlideHeight = document.querySelector('#range-height');
const slideValueWeight = document.querySelector('#weight-number');
const inputSlideWeight = document.querySelector('#range-weight');

inputSlideHeight.oninput = (() => {
    let value = inputSlideHeight.value;
    slideValueHeight.textContent = value;
});

inputSlideWeight.oninput = (() => {
    let value = inputSlideWeight.value;
    slideValueWeight.textContent = value;
});

groupBmi = [
    {
        group: 'Muito abaixo do peso',
        alert: 'Consulte um Medico',
        message: 'A relação entre o seu peso e altura está muito abaixo do recomendado. Este valor pode indicar alguma carência grave de nutriente, venha fazer uma avaliação com um dos nossos nutricionistas, faremos um plano de exercícios especifico para que você se recupere o mais saudável possivel, e consiga alcaçar o fisico sonhado.',
        color: 'rgba(71, 56, 204,0.7)',
    },
    {
        group: 'Abaixo do peso',
        alert: 'Consulte um Medico',
        message: 'A relação entre o seu peso e altura é abaixo do recomendado. Este valor pode indicar alguma carência de nutrientes, venha fazer uma avaliação com um dos nossos nutricionistas, faremos um plano de exercícios especifico para que você se recupere o mais saudável possivel, e consiga alcaçar o fisico sonhado. ',
        color: 'rgba(25, 0, 255,0.7)',
    },
    {
        group: 'Peso Normal',
        alert: 'Parabéns continue assim !!',
        message: 'A relação entre  o peso e altura está dentro do recomendado. venha já fazer uma avaliação, e comece já a treinar para obter o corpo dos seus sonhos',
        color: 'rgba(0, 255, 0,0.7)',
    },
    {
        group: 'Pré obesidade',
        alert: 'Mude os seus Hábitos',
        message: 'A um excesso de peso em relação a sua altura. venha fazer uma avaliação, e comece já a treinar para obter o corpo dos seus sonhos . A mudança está sempre em suas mãos !!',
        color: 'rgba(255, 238, 0,0.7)',
    },
    {
        group: 'Obesidade',
        alert: 'Está na hora de Mudar !!',
        message: 'A um excesso de peso em relação a sua altura. venha fazer uma avaliação, e comece já a treinar para obter o corpo dos seus sonhos . A mudança está sempre em suas mãos !!',
        color: 'rgba(255, 136, 0,0.7)',
    },
    {
        group: 'Obesidade Grave',
        alert: 'Consulte um Medico',
        message: 'A um excesso de peso em relação a sua altura. busque acompanhamento medico e venha fazer uma avaliação, comece já a treinar para obter o corpo dos seus sonhos . A mudança está sempre em suas mãos !!',
        color: 'rgba(255, 0, 0,0.7)',
    },
];

function calcBmi() {
    const weight = inputSlideWeight.value;
    const height = inputSlideHeight.value / 100;
    const valueBmi = ((weight / (height * height))).toFixed(1);
    return valueBmi;
}

function classificationBmi() {
    let bmi = calcBmi();
    let classification = 0;

    if (bmi < 17) {
        classification = 0;
    } else if (bmi < 19) {
        classification = 1;
    } else if (bmi < 24) {
        classification = 2;
    } else if (bmi < 29) {
        classification = 3;
    } else if (bmi < 39) {
        classification = 4;
    } else if (bmi > 40) {
        classification = 5;
    }

    return classification;
}

const boxResult = document.querySelector('.color-number');
const bmiResult = document.querySelector('.bmi-result');
const classResult = document.querySelector('.class-result');
const supportResult = document.querySelector('.support-result');
const textResult = document.querySelector('.text-result');



function result() {
    let bmi = classificationBmi();

    bmiResult.innerHTML = calcBmi();
    classResult.innerHTML = groupBmi[bmi].group;
    supportResult.innerHTML = groupBmi[bmi].alert;
    textResult.innerHTML = groupBmi[bmi].message;
    boxResult.style.background = groupBmi[bmi].color;
}
calc.addEventListener('click', result);

const btDev = document.querySelector('.bt-dev');
const devArea = document.querySelector('.dev')

function expand() {
    devArea.classList.toggle('active')
    console.log('clicou')
}

btDev.addEventListener('click', expand);
