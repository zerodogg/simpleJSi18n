/*! - Copyright Eskild Hustvedt 2010
 * Code license: GNU LGPLv3 */
/*
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 The payload data does not fall under the above license.
 */

(function (window)
{
    var map, lang, langs, gettext;

    /* Begin payload data */
    /*PAYLOAD*/
    /* End of payload data */

    /* Main gettext method */
    gettext = function (string)
    {
        if (map[string] === undefined)
            return string;
        var str = map[string][lang];
        if(str && str.length)
            return str;
        return string;
    };

    /* Initialization method. We don't initialize until the first call to _/gettext.
     * After initialization has finished, we will replace _/gettext with the proper
     * gettext method over */
    window._ = window.gettext = function (string)
    {
        var language = navigator.language || navigator.browserLanguage, 
            i = 0,
            languages;
        if(window._LANGUAGE)
        {
            language = window._LANGUAGE;
        }

        languages = language.split(/(;|,)/);
        for (i = 0; i < languages.length; i++)
        {
            var tryLang = languages[i];
            if (langs[tryLang])
            {
                lang = tryLang;
                break;
            }
        }
        if(lang)
        {
            // Replace us with the proper gettext
            window.gettext = window._ = gettext;
        }
        else
        {
            // We didn't detect any language that is supported.
            // Replace ourselves with a dummy function.
            window.gettext = window._ = function(s) { return s; };
        }
        return window.gettext(string);
    };
})(window);
