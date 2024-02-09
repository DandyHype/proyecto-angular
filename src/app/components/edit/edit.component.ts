import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrl: './edit.component.css',
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit{
    public title: string;
    public project: Project;
    public save_project: any;
    public status: string;
    public filesToUpload: Array<File>;
    public url: string;

    constructor(
        private _projectService: ProjectService,
        private _uploadService: UploadService,
        private _router: Router,
        private _route: ActivatedRoute
    ){
        this.title = "Editar proyecto";
        this.url = Global.url;
        this.project = new Project('', '', '', '', 2019, '', '');
        this.status = '';
        this.filesToUpload = [];

    }

    ngOnInit(): void {
      this._route.params.subscribe(params => {
        let id = params['id'];
        this.getProject(id);
      });
    }
  
    getProject(id: string){
      this._projectService.getProject(id).subscribe(
        response => {
          this.project = response.project;
        },
        error => {
          console.log(<any>error);
        }
      );
    }

    
}
