import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tmqexmpecrveukczziib.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtcWV4bXBlY3J2ZXVrY3p6aWliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MjUyODIsImV4cCI6MjA1NzQwMTI4Mn0.jNeYIZsVxiHIBow6cPuOkAaB7vFGr3MeqTgDcQNNI_4'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: Library, error } = await supabase
    .from('Library')
    .select('*')

    let bookList = document.getElementById('bookTable');

    for(let book in Library){
        bookList += '<tr><td>${book.title}</td></tr>'
    }
}

getBooks();
