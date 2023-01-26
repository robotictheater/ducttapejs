# Ducttape JS

The purpose of Ducttape JS is to make it dead simple to use VanillaJS to build web application front-ends without the need for heavy frameworks.  Instead it suggests a standard folder structure and offers  light-weight library of methods to make front-end development easy.


## Getting Started

Checkout the helloworld folder. It contains the base structure and files you will need to get started.



## Available Methods

The main DucttapeJS object is accessed with the double underscore __.

Below is a list of the available methods.

---------------

### Loading, Getting & Including scripts and data

__.getScript(url, cb)

__.getContent(url, cb)

__.callAPI(url, params)

__.load(files, cb, reload)

__.shared(obj)


---------------

### Routes, Routing & Navigating Pages

__.routeTo(url, includeQS)

__.updateLocationBar(url, includeQS)

__.appendToLocation(val, includeQS)


---------------

### Page Rendering

__.renderLayout(layout, cb)

__.renderScreen(screen, p)

__.processTemplate(html, obj)

__.loadComponent(component, params, cb)


---------------

### Forms

__.validateFormData(formId)

__.validateFormField([ids])

__.getFormData(formId)

__.getFormFile(el, cb)

__.setFormData(formId, data)

__.dataBind(obj, mapping)


---------------

### UI Loading

__.ui.loading.body(hide)

__.ui.loading.screen(hide)

__.ui.loading.section(id, hide)

__.ui.loading.button(id, hide)



---------------

### Jquery-like Helpers

__.ui.$.prependHtml(el,html)

__.ui.$.appendHtml(el,html)

__.ui.$.setHtml(el,html)

__.ui.$.addClass(selector, className)

__.ui.$.removeClass(selector, className)

__.ui.$.setAttribute(selector, attrName, attrValue)

__.ui.$.removeAttribute(selector, attrName)

__.ui.$.check(selector)

__.ui.$.uncheck(selector)

__.ui.$.removeElement(selector)


---------------

### Misc Helpers

__.rndString(len, params)

__.rndNumber(min, max)

__.uuidv4()

__.getCookie(name)