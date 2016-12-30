import { RootElement } from './root-element.js';

export class Table extends RootElement {
    constructor(headers, data){
        super();
        this.headers = headers;
        this.data = data;
    }

    getElementString(){

        let thTitles = '';
        for(let header of this.headers){
            thTitles += `<th>${header}</th>`
        }

        // <th>Название</th>
        //                     <th>Адрес</th>
        //                     <th>Фото</th>
        //                     <th>Вместимость</th>
        //                     <th>Кухня</th>

        let trData = '';
        for(let row of this.data){
            trData += '<tr>';
            for(let property of this.headers){
                let field = row[property.toLowerCase()];
                trData += `<td>${field}</td>`;
            }
            trData += '</tr>'
        }

        return `
        <div class="panel panel-primary">
            <div class="panel-heading">
                Список Ресторанов Города N
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            ${thTitles}
                        </tr>
                    </thead>
                    <tbody>
                        ${trData}
                    </tbody>
                </table>
            </div>
        </div>
        `
    }
}