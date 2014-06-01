var handleSubmit = function( event ) {
    event.preventDefault();

    var form = jQuery( this );

    jQuery.ajax({
        url: form.attr( 'action' ),
        type: 'POST',
        data: form.serialize(),
        dataType: 'json',
        success: successfulSubmit
    });
};

var successfulSubmit = function( responseJSON ) {
    var li = jQuery( '<li />' );

    if( jQuery( '#projects-list' ).length ) {

        var projectLink = jQuery( '<a />' );
        projectLink.attr( 'href', '/project/' + responseJSON.id );
        projectLink.text( responseJSON.title );
        li.append( projectLink );

        var deleteLink = jQuery( '<a />' );
        deleteLink.addClass( 'delete' );
        deleteLink.attr( 'href', '/projects/' + responseJSON.id );
        deleteLink.text( 'Delete Project' );
        li.append( deleteLink );

        jQuery( '#projects-list' ).append( li );
    }
    else {
        var taskElem = jQuery( '<span />' );
        taskElem.text( responseJSON.title );
        li.append( taskElem );

        var deleteLink = jQuery( '<a />' );
        deleteLink.addClass( 'delete' );
        deleteLink.attr( 'href', '/task/' + responseJSON.id );
        deleteLink.text( 'Delete Task' );
        li.append( deleteLink );

        jQuery( '#tasks-list' ).append( li );
    }

    jQuery( '#add' ).find( 'input' ).val( '' );
};

var handleDelete = function( event ) {
    event.preventDefault();

    var li = jQuery( this ).parent();

    jQuery.ajax({
        url: jQuery( this ).attr( 'href' ),
        type: 'DELETE',
        success: function() {
            li.remove();
        }
    });
};

jQuery( '#add' ).on( 'submit', handleSubmit );
jQuery( '.delete' ).on( 'click', handleDelete );

