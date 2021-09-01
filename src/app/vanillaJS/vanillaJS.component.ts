import { Component } from '@angular/core';

@Component({
  selector: 'app-vanillaJS-component',
  templateUrl: './vanillaJS.component.html',
  styleUrls: ["vanillaJS.component.css"]
})
export class VanillaJSComponent {
  projects = [
    {name: "Tribute Page", src: "tribute.jpg", link:"https://ana-portfolio-vanillajs.web.app/tributePage/"},
    {name: "Drum Set", src: "drum.jpg", link:"https://ana-portfolio-vanillajs.web.app/drums"},
    {name: "Clock", src: "clock.jpg", link:"https://ana-portfolio-vanillajs.web.app/clock"},
    {name: "Draw!", src: "draw.jpg", link:"https://ana-portfolio-vanillajs.web.app/draw/"},
    {name: "Live Editing", src: "liveUpdate.jpg", link:"https://ana-portfolio-vanillajs.web.app/liveUpdate/"},
    {name: "Flex Panels", src: "flexPanels.jpg", link:"https://ana-portfolio-vanillajs.web.app/flexPanels/"},
    {name: "Mouse Effect", src: "mouseEffects.jpg", link:"https://ana-portfolio-vanillajs.web.app/mouseEffects/"},
    {name: "Search bar", src: "searchBar.jpg", link:"https://ana-portfolio-vanillajs.web.app/searchBar/"},
    {name: "Slide Effect", src: "slideEffect.jpg", link:"https://ana-portfolio-vanillajs.web.app/slideEffect/"},
    {name: "Tapas List", src: "tapasList.jpg", link:"https://ana-portfolio-vanillajs.web.app/tapasList/"},
    {name: "Pick a Voice", src: "voiceChanger.jpg", link:"https://ana-portfolio-vanillajs.web.app/voiceChanger/"}
  ]
}
