tell application "Skim"
	set pdfName to name of front document
	
	set currentPageNumber to get index of current page of front document
	
	set obsidianLink to "```pdf 
{ \"url\": \"/PDF files/" & pdfName & "\"," & return & "\"page\": [" & currentPageNumber & "]}
```"
	set the clipboard to obsidianLink
end tell
