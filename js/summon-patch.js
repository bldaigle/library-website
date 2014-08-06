<!DOCTYPE html>
<html>
<head>
    <title>Summon Redirect</title>
    <meta charset="utf-8">
    <script>
        /**
         * Parse the URL into params
         * 
         * @see  http://papermashup.com/read-url-get-variables-withjavascript/
         * @param   string   The url to search (window.location by default)
         * @return   object   URL params as an object
         */
    
        var hash = window.location.hash.slice(1);
        var array = hash.split("&");

        var values, form_data = {};

        for (var i = 0; i < array.length; i += 1) {
            values = array[i].split("=");
            form_data[values[0]] = values[1];
        }

        var searchterm = form_data['s.q'];
        window.location.href = 'http://olc1.ohiolink.edu/search/X?SEARCH=' + searchterm;
        
    </script>
</head>
<body>
</body>
</html>
