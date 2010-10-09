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
 */

(function ()
{
	var map = null;

	window.gettext = window._ = function (string)
	{
		if(map == null)
		{
			initI18N();
		}
		if(map[string] != null && map[string].length > 0)
			return map[string];
		return string;
	}

	function initI18N ()
	{
		map = {};
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
			var lang = languages[i];
			if(I18N_CONTENT[lang])
			{
				map = I18N_CONTENT[lang];
				break;
			}
		}
	}
})();
