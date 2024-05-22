import { Component } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]

})
export class AppComponent {

  constructor(private messageService: MessageService) {}

  title = 'project-tip';
  items: { label?: string; icon?: string; separator?: boolean }[] = [];
  menu: MenuItem[] | undefined;

  ngOnInit() {
    console.log('ngOnInit');
    this.items = [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Search',
        icon: 'pi pi-search'
      },
      {
        separator: true
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];
  }

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}

}
