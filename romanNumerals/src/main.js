import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { romanNumerals } from './romanNumerals';

$(document).ready(function(){

  $("form#formOne").submit(function(event){
    event.preventDefault();
    var userInput = $("#textInput").val();
    var newRomanNumerals = new romanNumerals(userInput);
    $("#finalnumerals").text(newRomanNumerals.getRomanNumerals());
  });
});