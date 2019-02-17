<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Enova test</title>
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;amp;subset=latin,latin-ext">
    <link rel="stylesheet" href="{{STATIC_URL}}css/styles.css">
</head>
<body>
    {% include 'organismos/header.swig' %}
    {% include 'organismos/webapp.swig' %}
    <div>
        {% include 'moleculas/tarjeta.swig' %}
        {% include 'moleculas/board_filter.swig' %}
    </div>
    <script src="{{ STATIC_URL }}js/Chart.bundle.min.js"></script>
</body>
</html>