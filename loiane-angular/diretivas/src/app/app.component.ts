import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';

  test() {
    // jquery + lodash
    $('#changeme').html(
      _.map([1, 2, 3], n => `# ${n}`).join(' ')
    );
  }

}
