import { Component } from '@angular/core';
import { ListsData } from './dates';

const LISTS:ListsData[] = [{
        "img":'../assets/images/infor.svg',
        "title":"个人信息"
    },{
        "img":'../assets/images/kecb.svg',
        "title":"课程表"
    },{
        "img":'../assets/images/curri.svg',
        "title":"成绩"
    },{
        "img":'../assets/images/owercurr.svg',
        "title":"所有成绩"
    },{
        "img":'../assets/images/jidian.svg',
        "title":"绩点查询"
    },{
        "img":'../assets/images/teacher.svg',
        "title":"教职工查询"
    },{
        "img":'../assets/images/searchclass.svg',
        "title":"课程查询"
    },{
        "img":'../assets/images/news.svg',
        "title":"新闻"
    },{
        "img":'../assets/images/another.svg',
        "title":"其他"
    }]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 	{
    lists = LISTS;
}
