///<reference path="../../../node_modules/@types/jquery/index.d.ts" />

console.log('project manager loaded');

$('.create-project-form').on('submit', (event) => {

    event.preventDefault();
    event.stopPropagation();

    let form = $(event.target);
    form.find('button').text('Please wait...');

    $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(form.serializeJSON()),
        success: (...args:any[]) => {
            window.location.reload();
        }
    });

});

$('.delete-project-form').on('submit', (event) => {

    event.preventDefault();
    event.stopPropagation();

    let form = $(event.target);
    form.find('button').text('Removing...');

    $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(form.serializeJSON()),
        success: (...args:any[]) => {
            window.location.reload();
        }
    });

});