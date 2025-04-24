jQuery('document').ready(function(){
	jQuery('#first').on('click', function(){
		var value1, value2;
		value1 = jQuery('#val1').val();
		value2 = jQuery('#val2').val();
		
		if (value1 == value2){
			alert('Правильно!(нажми "Ок")');
		}else{
			alert('Не правильно!(нажми "Ок")');
		}
	});
});