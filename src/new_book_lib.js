// to be worked on:
//    - overall functionality and approach
//    - magic number of 'max_items_over_line'

let book_list = [];
let container_class = '"flex-item"';
let img_class = '"box-img"';
// as the css was designed
let max_items_over_line = 6;


// generates code based on how many books are
// present, so that they will be presented aligned
function auto_eq(max_books_over_line)
{
  let txt = "";
  while (max_books_over_line > 0)
  {
    txt += '<div class=' + container_class + '></div>';
    max_books_over_line--;
  }

  return txt;
}
txt_eq = auto_eq(max_items_over_line);


// class in which has the following properties:
//    - name (lower case - done automatically)
//    - image
//    - uploader (set by default to "" - since it's optional)
//    - html_side = full html code of the book(following the basic structure)
//    - tags = tags given to the book by the uploader
//  overloaded operator 'gt' > - serves its purpose for sorting the list
class book
{
  constructor(name, file_reference, image, tags = "", uploader = "")
  {
    this.name = name.toLowerCase();
    this.image = image;
    this.uploader = uploader;
    this.html_side  = '<div class=' + container_class + '>';
    this.html_side += '<a href="' + file_reference + '">';
    this.html_side += '<img class=' + img_class + ' src="' + image + '" ' + 'alt="' + name + '"' + ' title="">';
    this.html_side += '</a></div>';
        
    this.tags = [];
    for (let i = 0; i < tags.lenght; i++) 
    {
      this.tags[i] = tags[i].toLowerCase();
    }
    this.tags.sort();
  }

  ">"(a,b)
  {
    if (a.name > b.name)
    {
      return 1;
    }
    else
    {
      for (let i = 0; i < a.tag.lenght() && i < b.tag.lenght(); i++)
      {
        if (a.tag[i] > b.tag[i])
        {
          return 1;
        }
      }
    }

    return 0;
  }
}


function adder(name, file_reference, image, tags = "", uploader = "")
{
  let newBook = new book(name, file_reference, image, tags, uploader);
  let position_to_push = 0;

  for (let i = 0; i < book_list.length; i++)
  {
    if (newBook.name > book_list[i].name)
    {
      position_to_push = i + 1;
    }
  }

  
  book_list.splice(position_to_push, 0, newBook);
  document.getElementById("auto_gen").innerHTML = "";
  let auto_gen_html_list = "";

  for (let i = 0; i < book_list.length; i++)
  {
    auto_gen_html_list += book_list[i].html_side;
  }
  auto_gen_html_list += txt_eq;

  document.getElementById("auto_gen").innerHTML = auto_gen_html_list;
}



// test
// function testResults (form) 
// {
//   var inputValue = form.name.value;
//   alert ("You typed: " + inputValue);
// }