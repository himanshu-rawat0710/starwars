$(function(){



  var starWarsApi = "https://swapi.co/api/people/";
  console.log(starWarsApi);
  var result=$(".result");
  var nam=$(".star-name");
  var height=$(".height");
  var mass=$(".mass");
  var birth=$(".birth");
  var created=$(".created");
  var eye=$(".eye-color");
  var skin=$(".skin-color");
  var gender=$(".gender");



  function execute(){
    var randomNumber = Math.floor((Math.random()*88)+1);
    var starWarsApi2 = starWarsApi+randomNumber;
    $.getJSON(starWarsApi2,{
    // option.....


  }).done(function(data){
    // data.name
    // content.empty()
    console.log(data);
    nam.text(data.name);
    height.text("Height :  " + data.height);
    mass.text("Mass :  " + data.mass);
    birth.text("Birth Year :  " + data.birth_year);
    created.text("Created :  " + data.created);
    eye.text("Eye colour :  " + data.eye_color);
    skin.text("Skin colour :  " + data.skin_color);
    gender.text("Gender :  " + data.gender);
    // console.log(data.name);

  }).fail(function(){

  });

}
result.click(function(){
  execute();

});


});
