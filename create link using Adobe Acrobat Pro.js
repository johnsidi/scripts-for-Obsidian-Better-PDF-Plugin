var pageNumber = this.pageNum;
var pdfName = this.documentFileName;
var obsidianLink =
  '```pdf\r{"url": "/PDF files/' +
  pdfName +
  '",\r"page": [' +
  pageNumber +
  ']}\n```';

var dialog1 = {
  initialize: function (dialog) {
    dialog.load({ link: obsidianLink });
  },
  description: {
    name: 'link for Obsidian link', // Dialog box title
    align_children: 'align_left',
    width: 350,
    height: 200,
    elements: [
      {
        type: 'cluster',
        name: 'Obsidian Link: ',
        align_children: 'align_left',
        elements: [
          {
            type: 'view',
            align_children: 'align_row',
            elements: [
              {
                type: 'static_text',
                name: 'link : ',
              },
              {
//the item_id should be a four character string
                item_id: 'link',
                type: 'edit_text',
                alignment: 'align_fill',
                multiline: true,
                width: 300,
                height: 80,
              },
            ],
          },
        ],
      },
      {
        alignment: 'align_right',
        type: 'ok_cancel',
        ok_name: 'Ok',
        cancel_name: 'Cancel',
      },
    ],
  },
};

app.execDialog(dialog1);

