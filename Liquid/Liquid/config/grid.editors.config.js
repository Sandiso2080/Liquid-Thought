[
    {
        "name": "Rich text editor",
        "alias": "rte",
        "view": "rte",
        "icon": "icon-article"
    },
    {
        "name": "Image",
        "nameTemplate": "{{ value && value.udi ? (value.udi | ncNodeName) : '' }}",
        "alias": "media",
        "view": "media",
        "icon": "icon-picture"
    },
    {
        "name": "Macro",
        "nameTemplate": "{{ value && value.macroAlias ? value.macroAlias : '' }}",
        "alias": "macro",
        "view": "macro",
        "icon": "icon-settings-alt"
    },
    {
        "name": "Embed",
        "alias": "embed",
        "view": "embed",
        "icon": "icon-movie-alt"
    },
    {
        "name": "Headline",
        "nameTemplate": "{{ value }}",
        "alias": "headline",
        "view": "textstring",
        "icon": "icon-coin",
        "config": {
            "style": "font-size: 36px; line-height: 45px; font-weight: bold",
            "markup": "<h1>#value#</h1>"
        }
    },
    {
        "name": "Quote",
        "nameTemplate": "{{ value ? value.substring(0,32) + (value.length > 32 ? '...' : '') : '' }}",
        "alias": "quote",
        "view": "textstring",
        "icon": "icon-quote",
        "config": {
            "style": "border-left: 3px solid #ccc; padding: 10px; color: #ccc; font-family: serif; font-style: italic; font-size: 18px",
            "markup": "<blockquote>#value#</blockquote>"
        }
    },
    {
        "name": "Main Header",
        "alias": "mainHeader",
        "view": "/App_Plugins/DocTypeGridEditor/Views/doctypegrideditor.html",
        "render": "/App_Plugins/DocTypeGridEditor/Render/DocTypeGridEditor.cshtml",
        "icon": "icon-pictures-alt-2 color-indigo",
        "config": {
            "allowedDocTypes": ["mainHeader"],
            "nameTemplate": "",
            "enablePreview": true,
            "viewPath": "/Views/Partials/Grid/Editors/",
            "previewViewPath": "/Views/Partials/Grid/Editors/",
            "previewCssFilePath": "/Css/",
            "previewJsFilePath": ""
        }
    },
    {
        "name": "Image Right Content Left",
        "alias": "twoColumnContentImage",
        "view": "/App_Plugins/DocTypeGridEditor/Views/doctypegrideditor.html",
        "render": "/App_Plugins/DocTypeGridEditor/Render/DocTypeGridEditor.cshtml",
        "icon": "icon-firewall color-indigo",
        "config": {
            "allowedDocTypes": ["twoColumnContentImage"],
            "nameTemplate": "",
            "enablePreview": true,
            "viewPath": "/Views/Partials/Grid/Editors/",
            "previewViewPath": "/Views/Partials/Grid/Editors/",
            "previewCssFilePath": "/Css/",
            "previewJsFilePath": ""
        }
    },
    {
        "name": "General Header",
        "alias": "generalHeader",
        "view": "/App_Plugins/DocTypeGridEditor/Views/doctypegrideditor.html",
        "render": "/App_Plugins/DocTypeGridEditor/Render/DocTypeGridEditor.cshtml",
        "icon": "icon-umb-media color-indigo",
        "config": {
            "allowedDocTypes": ["generalHeader"],
            "nameTemplate": "",
            "enablePreview": true,
            "viewPath": "/Views/Partials/Grid/Editors/",
            "previewViewPath": "/Views/Partials/Grid/Editors/",
            "previewCssFilePath": "/Css/",
            "previewJsFilePath": ""
        }
    },
    {
        "name": "Map Holder",
        "alias": "mapHolder",
        "view": "/App_Plugins/DocTypeGridEditor/Views/doctypegrideditor.html",
        "render": "/App_Plugins/DocTypeGridEditor/Render/DocTypeGridEditor.cshtml",
        "icon": "icon-map-location color-indigo",
        "config": {
            "allowedDocTypes": ["mapHolder"],
            "nameTemplate": "",
            "enablePreview": true,
            "viewPath": "/Views/Partials/Grid/Editors/",
            "previewViewPath": "/Views/Partials/Grid/Editors/",
            "previewCssFilePath": "/Css/",
            "previewJsFilePath": ""
        }
    },
]

