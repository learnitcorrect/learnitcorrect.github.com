$(function() {

	$('#info-titles .tab').click(function() {

		$('#info-titles .tab').removeClass('info-selected');
		$(this).addClass('info-selected');

		//show the content
		$('#info-content div').hide();
		$('#' + $(this).attr('id') + '-c').show();

	});

	$('#info-titles #basic-requirments').click();

});