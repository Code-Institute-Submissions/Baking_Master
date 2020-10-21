/* global $ */

/**
 * This functions is taking current full year and passing it into copyrights section
 */
$('#copyright').html(new Date().getFullYear());

/**
 * This function will clear contact form
 */
$('#clear-contact-form').click(function() {
    $('#contact-name').val('');
    $('#contact-email').val('');
    $('#contact-message').val('');
});

/**
 * This function will hide flash messages after few seconds
 */
$(document).ready(function() {
    setTimeout(function() {
        $('#flash-message').animate({ height: 0, opacity: 0 }, 'fast');
    }, 3500);
});


/**
 * This function will execut code to collapse info section in about page
 */
$('#myCollapsible').collapse({
    toggle: false
});

/**
 * This function will add another ingredient
 */
$(".appendIngredient").click(function() {

    if ($('.ingredient')[0]) {

        let cloned = $('#ingredients').children('.ingredient').first().clone();
        cloned.appendTo('#ingredients');
    }
    else {
         $('#ingredients').append('<div class="ingredient"><div class="top-ingredient"><button class="removeingredient btn main-button-small" type="button">x</button><div class="ingredient-inputs"><input type="text" class="form-control" id="ingredient-name" name="ingredient-name" placeholder="Ingredient" required><input type="text" class="form-control" id="ingredient-scale" name="ingredient-scale" placeholder="g/ml" required></div></div></div>');
    }
});

/**
 * This function will remove unwanted ingredient fields
 */
$('body').on('click', '.removeingredient', function() {
    $(this).closest('.ingredient').remove();
});

/**
 * This function will add another step
 */
let stepCount = 0;
$(".appendStep").click(function() {

    if ($('.step')[0]) {

        let clonedSteps = $('#steps').children('.step').first().clone();

        stepCount++;
        let countLabel = ("<label class='step-label'>Step " + stepCount + "</label>");
        clonedSteps.appendTo('#steps');
        clonedSteps.find('label').replaceWith(countLabel);
        console.log(countLabel);

    }
    else {
        stepCount++;
        let countLabel = ("<label class='step-label'>Step " + stepCount + "</label>");
        $('#steps').append('<div class="step"><div class="top-step"><label class="step-label">' + countLabel + '</label><button class="removeStep btn main-button-small" type="button">x</button></div><textarea class="form-control" rows="2" id="preparation-step" placeholder="Step explanation" required></textarea></div>');
    }
});

/**
 * This function will remove unwanted step fields
 */
$('body').on('click', '.removeStep', function() {
    $(this).closest('.step').remove();
    stepCount--;
});

/**
 * This function will add another tip
 */
let tipCount = 0;
$(".appendTip").click(function() {

    if ($('.tips')[0]) {

        let clonedTips = $('#tips').children('.tip').first().clone();

        tipCount++;
        let countTipLabel = ("<label class='tip-label'>Tip " + tipCount + "</label>");
        clonedTips.appendTo('#tips');
        clonedTips.find('label').replaceWith(countTipLabel);
        console.log(countTipLabel);

    }
    else {
        tipCount++;
        let countTipLabel = ("<label class='tip-label'>Tip " + tipCount + "</label>");
        $('#tips').append('<div class="tip"><div class="top-tip"><label class="tip-label">' + countTipLabel + '</label><button class="removeTip btn main-button-small" type="button">x</button></div><textarea class="form-control" rows="2" id="preparation-tip" placeholder="Tip explanation" required></textarea></div>');
    }
});

/**
 * This function will remove unwanted tip fields
 */
$('body').on('click', '.removeTip', function() {
    $(this).closest('.tip').remove();
    tipCount--;
});