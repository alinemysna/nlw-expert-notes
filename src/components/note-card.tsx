export function NoteCard() {
    return (
        <button className='rounded-md text-left  bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600  focus:ring-2 focus:ring-line-400'>
            <span className='text-sm font-medium text-slate-300'>
              há 2 dias
            </span>
            <p className='text-sm leading-6 text-slate-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab aperiam maiores labore, voluptatum impedit hic ipsum ducimus eius iste tempora soluta laboriosam quas beatae accusamus saepe animi reprehenderit iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex asperiores, pariatur tempore nobis dolores quia. Nam rerum ut, odit reiciendis dolor deleniti ex veniam soluta, quam nihil quidem vero!</p>

              <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
           </button>
    )
}