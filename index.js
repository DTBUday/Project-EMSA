var pug = require('pug');
var fs = require('fs');

function convertMarkdown(str) {
    if (str != null) {
        return markdown.render(str);
    }
}

function render(info) {
	info.sections.reverse();

	fs.readdirSync('./images/gallery/').forEach(file => {
		info.gallery.push('images/gallery/' + file);
	});

	return pug.renderFile(__dirname + '/index.pug', {
		info: info,
	});
}

module.exports = {
	render: render
};
