//adding event listener
L.DomEvent.addListener(html_element, "string", function_name, object);

//example
L.DomEvent.addListener(this._addRow, "click", this._onAddRow, this);

//removing event listener
L.DomEvent.removeListener(html_element, "string", function_name, object);

//example
L.DomEvent.removeListener(this._scaleHandle, "mousedown", this._onScaleMouseDown);