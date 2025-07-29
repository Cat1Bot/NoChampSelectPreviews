import * as upl from 'pengu-upl';
export function init(context: any) {
    upl.init(context);
    upl.hooks.xhr.hookPost(`/lol-client-config/v3/client-config/lol.client_settings.champ_select.enable_ability_previews`, (xhr, original) => {
        Object.defineProperty(xhr, 'responseText', { writable: true, value: false });
        original();
    });
}
