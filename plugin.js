/**
 * @author Masih Fathi <masihfathi@gmail.com>
 * @license MIT
 * plugin for inserting unsubscribe link into the CKEditor editing area.
 **/

// Register the plugin within the editor.
CKEDITOR.plugins.add( 'unsubscribe', {

    // Register the icons.
    icons: 'unsubscribe',

    // The plugin initialization logic goes inside this method.
    init: function( editor ) {

        // Create a toolbar button that executes the above command.
        editor.ui.addButton( 'unsubscribe', {

            // The text part of the button (if available) and the tooltip.
            label: 'Insert Unsubscribe Link',

            // The command to execute on click.
            command: 'unsubscribe',

            // The button placement in the toolbar (toolbar group name).
            toolbar: 'insert'
        });
        editor.addCommand( 'unsubscribe', {
            exec: function( editor ) {
                let sel = editor.getSelection();
                let selectedText = sel.getSelectedText();
                if(selectedText){
                    let newElement = editor.document.createElement( 'a' );
                    newElement.setAttributes({href: '[UNSUBSCRIBE_URL]'});
                    newElement.setText(selectedText);
                    editor.insertElement(newElement);
                }else{
                    alert('You must select a text in the editor and then click on this button');
                }
            }
        } );
    }
});