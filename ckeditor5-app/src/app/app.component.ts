// app.component.ts
import { Component, OnInit } from '@angular/core';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ckeditor5-app';

  template_data = "<h2 style='text-align:center;'>The Flavorful Tuscany Meetup</h2><h3 style='text-align:center;'>Welcome letter</h3><p>Dear Guest,</p><p>We are delighted to welcome you to the annual <i>Flavorful Tuscany Meetup</i> and hope you will enjoy the programme as well as your stay at the <a href='http://ckeditor.com'>Bilancino Hotel</a>.</p><p>Please find below the full schedule of the event.</p><figure class='table ck-widget ck-widget_with-selection-handle' contenteditable='false'><div class='ck ck-widget__selection-handle'><svg class='ck ck-icon' viewBox='0 0 16 16'><path d='M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z'></path><path fill-opacity='.256' d='M1 1h14v14H1z'></path><g class='ck-icon__selected-indicator'><path d='M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z'></path><path fill-opacity='.254' d='M1 1h14v14H1z'></path></g></svg></div><table><thead><tr><th class='ck-editor__editable ck-editor__nested-editable' contenteditable='true' colspan='2'><span style='display:inline-block;'>Saturday, July 14</span></th></tr></thead><tbody><tr><td class='ck-editor__editable ck-editor__nested-editable' contenteditable='true'><span style='display:inline-block;'>9:30 AM - 11:30 AM</span></td><td class='ck-editor__editable ck-editor__nested-editable' contenteditable='true'><p><strong>Americano vs. Brewed</strong> - “know your coffee” with:&nbsp;</p><ul><li>Giulia Bianchi</li><li>Stefano Garau</li><li>Giuseppe Russo</li></ul></td></tr><tr><td class='ck-editor__editable ck-editor__nested-editable' contenteditable='true'><span style='display:inline-block;'>1:00 PM - 3:00 PM</span></td><td class='ck-editor__editable ck-editor__nested-editable' contenteditable='true'><p><strong>Pappardelle al pomodoro</strong> - live cooking</p><p>Incorporate the freshest ingredients&nbsp;<br>with Rita Fresco</p></td></tr><tr><td class='ck-editor__editable ck-editor__nested-editable' contenteditable='true'><span style='display:inline-block;'>5:00 PM - 8:00 PM</span></td><td class='ck-editor__editable ck-editor__nested-editable' contenteditable='true'><span style='display:inline-block;'><strong>Tuscan vineyards at a glance</strong> - wine-tasting&nbsp;<br>with Frederico Riscoli</span></td></tr></tbody></table><div class='ck ck-reset_all ck-widget__type-around'><div class='ck ck-widget__type-around__button ck-widget__type-around__button_before' title='Insert paragraph before block'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'><polyline points='8.05541992 0.263427734 8.05541992 4.23461914 1.28417969 4.23461914' transform='translate(1,0)'></polyline><line x1='0' y1='4.21581031' x2='2' y2='2.17810059' transform='translate(1, 0)'></line><line x1='0' y1='6.21581031' x2='2' y2='4.17810059' transform='translate(2, 5.196955) scale(1, -1) translate(-1, -5.196955)'></line></svg></div><div class='ck ck-widget__type-around__button ck-widget__type-around__button_after' title='Insert paragraph after block'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8'><polyline points='8.05541992 0.263427734 8.05541992 4.23461914 1.28417969 4.23461914' transform='translate(1,0)'></polyline><line x1='0' y1='4.21581031' x2='2' y2='2.17810059' transform='translate(1, 0)'></line><line x1='0' y1='6.21581031' x2='2' y2='4.17810059' transform='translate(2, 5.196955) scale(1, -1) translate(-1, -5.196955)'></line></svg></div><div class='ck ck-widget__type-around__fake-caret'></div></div></figure><blockquote><p>The annual Flavorful Tuscany meetups are always a culinary discovery. You get the best of Tuscan flavors during an intense one-day stay at one of the top hotels of the region. All the sessions are lead by top chefs passionate about their profession. I would certainly recommend to save the date in your calendar for this one!</p><p>Angelina Calvino, food journalist</p></blockquote><p>Please arrive at the <a href='http://ckeditor.com'>Bilancino Hotel</a> reception desk <span style='background-color:hsl(60,75%,60%);'>at least half an hour earlier</span> to make sure that the registration process goes as smoothly as possible.</p><p>We look forward to welcoming you to the event.</p><p><strong>Victoria Valc</strong></p><p><strong>Event Manager</strong></p><p><strong>Bilancino Hotel</strong></p>"

  constructor() {
    
  }
 
  ngOnInit() {
    DecoupledEditor
    .create( document.querySelector('#editor') )
    .then( editor => {
      editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement(),);

        // set initial template data
        editor.setData(this.template_data);

        console.log( editor );
    } )
    .catch( error => {
            console.error( error );
    } );



  }
}
