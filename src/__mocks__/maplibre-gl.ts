export class Map {
  private listeners: Record<string, Function[]> = {}
  constructor(options: any) {}
  on(event: string, handler: Function) {
    if (!this.listeners[event]) this.listeners[event] = []
    this.listeners[event].push(handler)
  }
  off(event: string, handler: Function) {}
  remove() { this.listeners = {} }
  getContainer() { return document.createElement('div') }
  setStyle() {}
  getZoom() { return 10 }
}

export class Marker {
  setLngLat(lngLat: [number, number]) { return this }
  addTo(map: any) { return this }
  setPopup(popup: any) { return this }
  remove() {}
}

export class Popup {
  setMaxWidth() { return this }
  setDOMContent() { return this }
  setLngLat() { return this }
  addTo() { return this }
}

const maplibreGL = { Map, Marker, Popup }
export default maplibreGL
