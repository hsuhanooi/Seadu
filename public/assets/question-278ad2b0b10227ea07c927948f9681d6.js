function updateQuestions(){var a=$("#room").attr("data-id"),b=$("#questions").attr("data-page"),c=$("#questions").attr("data-sort"),d=$("#teachers_view").length>0;b||$.getScript("/questions/"+c+".js?room_id="+a+"&page="+b+"&teacher="+d),setTimeout(updateQuestions,5e3)}$(function(){$("#question_list li").length>0&&setTimeout(updateQuestions,5e3)})