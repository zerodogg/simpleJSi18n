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

(function ()
{
	var map = null,
        lang = null,
        langs = null;

    /* Begin payload data */
    /*PAYLOAD*/
    /* End of payload data */

	window.gettext = window._ = function (string)
	{
        try
        {
            if(initI18N !== null)
            {
                initI18N();
                initI18N = null;
            }
            if(lang != null)
            {
                var str = map[string][lang];
                if(str && str.length)
                    return str;
            }
        } catch(e) {}
		return string;
	}

	function initI18N ()
	{
		var language = navigator.language || navigator.browserLanguage; 
		try
		{
			if(_I18N_LANGUAGE_OVERRIDE !== undefined)
			{
				language = _I18N_LANGUAGE_OVERRIDE;
			}
		} catch(e) { }

		var languages = language.split(/(;|,)/);
		for (var i = 0; i < languages.length; i++)
		{
			var tryLang = languages[i];
            if (langs[tryLang])
            {
                lang = tryLang;
                break;
            }
		}
	}
})();
