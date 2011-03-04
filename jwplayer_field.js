/* JavaScript for JW Player Field */

(function ($) {

  Drupal.behaviors.jwplayerField = function (context) {
    if (jwplayer && Drupal.settings.jwplayerField) {
      for (var id in Drupal.settings.jwplayerField.fields) {
        if (Drupal.settings.jwplayerField.fields.hasOwnProperty(id) && $('#' + id, context).length) {
          jwplayer(id).setup({
            file: Drupal.settings.jwplayerField.fields[id].file,
            height: Drupal.settings.jwplayerField.fields[id].hasOwnProperty('height') ? Drupal.settings.jwplayerField.fields[id].height : Drupal.settings.jwplayerField.config.height,
            width: Drupal.settings.jwplayerField.fields[id].hasOwnProperty('width') ? Drupal.settings.jwplayerField.fields[id].width : Drupal.settings.jwplayerField.config.width,
            controlbar: 'bottom',
            players: [{type: 'html5'}, {type: 'flash', src: Drupal.settings.jwplayerField.config.flashplayer}]
          });
        }
      }
    }
  };

}(jQuery));
