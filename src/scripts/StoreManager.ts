import { writable } from "svelte/store";
// export const PostItList = writable();
// variable {Opt title, text}
//if title: render only text make title disappear)
export const postit_list = [];

export function addEntry(postit_obj:Postit) {
  //TODO add certain entry to the list
  postit_list.push(postit_obj);
}

export function addRemoveEntry(postit_obj:Postit) {
  //TODO remove certain entry from the list
  //set A
  
}

class Postit {
  text:string;
  title:string;
  constructor(text) {
    this.text = text;
  }
}

class PostitBuilder {
  obj:Postit;
  constructor(text) {
    this.obj = new Postit(text);
  }
  setTitle(titletext: string) {
    this.obj.title = titletext;
    return this;
  }
  build() {
    return this.obj;
  }
}
