function chooseAnimal(someInput) {

    let inputLength = someInput.length

if(inputLength < 4)
{

    console.log('your animal is a sluggggggg');
}
else if(4 < inputLength < 6)
{
    console.log('your animal is NOT a sluggggggg 🐌');
}

}

//chooseAnimal("dadsfdasdfs");

$("#coolNameFactsOutput").html(chooseAnimal("dadsfdasdfs"));