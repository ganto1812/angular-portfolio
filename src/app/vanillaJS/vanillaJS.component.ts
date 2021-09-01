import { Component } from '@angular/core';

@Component({
  selector: 'app-vanillaJS-component',
  templateUrl: './vanillaJS.component.html',
  styleUrls: ["vanillaJS.component.css"]
})
export class VanillaJSComponent {
  projects = [
    {name: "Tribute Page", src: "tribute.jpg", link:"https://ana-portfolio-vanillajs.web.app/tributepage/"},
    {name: "Drum Set", src: "drum.jpg", link:"https://ana-portfolio-vanillajs.web.app/drums"},
    {name: "Clock", src: "clock.jpg", link:"https://ana-portfolio-vanillajs.web.app/clock"},
    {name: "Draw!", src: "draw.jpg", link:"https://ana-portfolio-vanillajs.web.app/draw/"},
    {name: "Live Editing", src: "liveUpdate.jpg", link:"https://ana-portfolio-vanillajs.web.app/liveupdate/"},
    {name: "Flex Panels", src: "flexPanels.jpg", link:"https://ana-portfolio-vanillajs.web.app/flexpanels/"},
    {name: "Mouse Effect", src: "mouseEffects.jpg", link:"https://ana-portfolio-vanillajs.web.app/mouseeffects/"},
    {name: "Search bar", src: "searchBar.jpg", link:"https://ana-portfolio-vanillajs.web.app/searchbar/"},
    {name: "Slide Effect", src: "slideEffect.jpg", link:"https://ana-portfolio-vanillajs.web.app/slideeffect/"},
    {name: "Tapas List", src: "tapasList.jpg", link:"https://ana-portfolio-vanillajs.web.app/tapaslist/"},
    {name: "Pick a Voice", src: "voiceChanger.jpg", link:"https://ana-portfolio-vanillajs.web.app/voicechanger/"}
  ]
}
