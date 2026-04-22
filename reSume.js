let iconOne = document.getElementById('abme')
let iconTwo = document.getElementById('icon2')
let iconThree = document.getElementById('icon3')

let list = document.querySelector('.aboutMe')

// DRAG STATE
let note = { dom: null, offsetX: 0, offsetY: 0 }
let note2 = { dom: null, offsetX: 0, offsetY: 0 }
let note3 = { dom: null, offsetX: 0, offsetY: 0 }

// ─── TOUCH DRAG ───────────────────────────────────────────────────────
function enableTouchDrag(windowEl, noteObj) {
    windowEl.addEventListener('touchstart', (e) => {
        const rect = windowEl.getBoundingClientRect()
        const touch = e.touches[0]
        // only drag if touching the green title bar (top 40px)
        if (touch.clientY - rect.top > 40) return
        e.preventDefault()
        noteObj.dom = windowEl
        noteObj.offsetX = touch.clientX - windowEl.offsetLeft
        noteObj.offsetY = touch.clientY - windowEl.offsetTop
    }, { passive: false })

    windowEl.addEventListener('touchmove', (e) => {
        if (!noteObj.dom) return
        e.preventDefault()

        const touch = e.touches[0]
        const container = document.querySelector('main')
        const containerRect = container.getBoundingClientRect()
        const windowRect = windowEl.getBoundingClientRect()

        let newLeft = touch.clientX - noteObj.offsetX
        let newTop = touch.clientY - noteObj.offsetY

        if (newLeft < containerRect.left - 80) newLeft = containerRect.left - 80
        if (newLeft + windowRect.width > containerRect.right) newLeft = containerRect.right - windowRect.width
        if (newTop < containerRect.top - 285) newTop = containerRect.top - 285
        if (newTop + 42.5 > containerRect.bottom) newTop = containerRect.bottom - 42.5

        windowEl.style.left = newLeft + "px"
        windowEl.style.top = newTop + "px"
    }, { passive: false })

    windowEl.addEventListener('touchend', () => {
        noteObj.dom = null
    })
}

// ─── OPEN WINDOW 1 - ABOUT ME ─────────────────────────────────────────
iconOne.onclick = () => {
    if (document.querySelector('.mePage')) return

    let newNote = document.createElement('div')
    newNote.classList.add('mePage')
    newNote.innerHTML = `
        <div class="tab">
            <p id="titlePage">about me</p>
            <span class="close">x</span>
        </div>
        <div class="banner">
            <img id="pfp" src="img/pfpf.png" alt="">
            <div class="bantext">
                <p id="name">King Simon Baran</p>
                <span>ph-based freelancer, web developer, and a computer science student</span>
            </div>
        </div>
        <div class="content">
            <div class="mainc">
                <div class="detail"><p id="lTitle">DEVELOPMENT</p></div>
                <div id="prog">
                    <p>HTML/CSS</p><p>JavaScript</p><p>C++</p><p>Python</p>
                </div>
                <div class="creates">
                    <p><li>do frontend web development</li></p>
                    <p><li>edits videos</li></p>
                    <p><li>sells arduino codes</li></p>
                </div>
                <div class="beat">
                    <div class="hawak">
                        <div id="lPro">
                            <p id="langpr">Language Proficiency:</p>
                            <p id="lang">Tagalog & English</p>
                        </div>

                        <div class="secpage">
                        <p id="ti">OTHER INTEREST</p>
                        <div class="interest">
                            <p><li>game development</li></p>
                            <p><li>playing intruments</li></p>
                            <p><li>explore sports</li></p>
                            <p><li>learn random stuffs</li></p>
                        </div>
                        <p id="pi">EDUCATION</p>
                        <div class="educ">
                            <p><li>STEM graduate</li></p>
                            <p><li>currently taking Bachelor of Science in Computer Science</li></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    list.appendChild(newNote)
    enableTouchDrag(newNote, note)
}

// ─── OPEN WINDOW 2 - CONTACT ──────────────────────────────────────────
iconTwo.onclick = () => {
    if (document.querySelector('.taby2')) return

    let newNote = document.createElement('div')
    newNote.classList.add('taby2')
    newNote.innerHTML = `
        <div class="tab2">
            <p id="titlePage">contact</p>
            <span class="close2">x</span>
        </div>
        <div class="cutieee">
            <p id="email">email me please!!!</p>
            <div class="tala"><p>easiest way to contact me is through email ><</p></div>
            <img id="cry" src="img/cry.png" alt="">
            <div class="k"><p id="mail">email me at:</p><p id="copy">k7ng.sy@gmail.com</p></div>
            <div class="i"><p>or press the button below to open your mail app</p></div>
            <div class="mailBtn"><a href="mailto:k7ng.sy@gmail.com"><button id="mBtn">Send me an email!</button></a></div>
        </div>
    `
    list.appendChild(newNote)
    enableTouchDrag(newNote, note2)

    const copyText = newNote.querySelector('#copy')
    copyText.addEventListener('click', () => {
        navigator.clipboard.writeText(copyText.textContent)
        copyText.textContent = "Copied!"
        setTimeout(() => { copyText.textContent = "k7ng.sy@gmail.com" }, 1500)
    })
}

// ─── OPEN WINDOW 3 - FAQ ──────────────────────────────────────────────
iconThree.onclick = () => {
    if (document.querySelector('.taby3')) return

    let newNote = document.createElement('div')
    newNote.classList.add('taby3')
    newNote.innerHTML = `
        <div class="tab3">
            <p id="titlePage">faq</p>
            <span class="close3">x</span>
        </div>
        <div class="all">
            <div class="faq">
                <div class="question">Tell me about yourself and your qualifications?</div>
                <ul class="answer">
                    <li>I have experience selling educational materials such as reviewers and codes.</li>
                    <li>I also take over when needed in our family sari-sari store.</li>
                </ul>
            </div>
            <div class="faq">
                <div class="question">What are your greatest strengths?</div>
                <ul class="answer">
                    <li>I am passionate about the things I love to do, and if given the opportunity to work in a job I love, I can be an effective employee.</li>
                </ul>
            </div>
            <div class="faq">
                <div class="question">What is your greatest weakness?</div>
                <ul class="answer">
                    <li>I'm an introvert, which is why I prefer roles where socializing is minimal so I can work more effectively.</li>
                </ul>
            </div>
            <div class="faq">
                <div class="question">What are your goals for the future?</div>
                <ul class="answer">
                    <li>I want to deepen my programming expertise. The challenges in this role would help guide my career toward leadership.</li>
                </ul>
            </div>
            <div class="faq">
                <div class="question">Why should we hire you?</div>
                <ul class="answer">
                    <li>I have strong time-management and deadline-driven skills, and I can easily adapt to different work environments and team dynamics.</li>
                </ul>
            </div>
        </div>
    `
    list.appendChild(newNote)
    enableTouchDrag(newNote, note3)
}

// ─── CLOSE WINDOWS ────────────────────────────────────────────────────
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('close'))
        event.target.closest('.mePage').remove()
    if (event.target.classList.contains('close2'))
        event.target.closest('.taby2').remove()
    if (event.target.classList.contains('close3'))
        event.target.closest('.taby3').remove()
})

// same but for touch on mobile
document.addEventListener('touchend', (event) => {
    if (event.target.classList.contains('close'))
        event.target.closest('.mePage').remove()
    if (event.target.classList.contains('close2'))
        event.target.closest('.taby2').remove()
    if (event.target.classList.contains('close3'))
        event.target.closest('.taby3').remove()
})

// ─── MOUSE DRAG ───────────────────────────────────────────────────────
function applyLimits(noteObj, x, y) {
    const container = document.querySelector('main')
    const containerRect = container.getBoundingClientRect()
    const windowRect = noteObj.dom.getBoundingClientRect()

    let newLeft = x - noteObj.offsetX
    let newTop = y - noteObj.offsetY

    if (newLeft < containerRect.left - 310) newLeft = containerRect.left - 310
    if (newLeft + windowRect.width > containerRect.right) newLeft = containerRect.right - windowRect.width
    if (newTop < containerRect.top - 157) newTop = containerRect.top - 157
    if (newTop + 42.5 > containerRect.bottom) newTop = containerRect.bottom - 42.5

    noteObj.dom.style.left = newLeft + "px"
    noteObj.dom.style.top = newTop + "px"
}

document.addEventListener('mousedown', (event) => {
    const tab = event.target.closest('.tab')
    if (tab) {
        const el = tab.closest('.mePage')
        note.dom = el
        note.offsetX = event.clientX - el.offsetLeft
        note.offsetY = event.clientY - el.offsetTop
    }
    const tab2 = event.target.closest('.tab2')
    if (tab2) {
        const el = tab2.closest('.taby2')
        note2.dom = el
        note2.offsetX = event.clientX - el.offsetLeft
        note2.offsetY = event.clientY - el.offsetTop
    }
    const tab3 = event.target.closest('.tab3')
    if (tab3) {
        const el = tab3.closest('.taby3')
        note3.dom = el
        note3.offsetX = event.clientX - el.offsetLeft
        note3.offsetY = event.clientY - el.offsetTop
    }
})

document.addEventListener('mousemove', (event) => {
    if (note.dom) applyLimits(note, event.clientX, event.clientY)
    if (note2.dom) applyLimits(note2, event.clientX, event.clientY)
    if (note3.dom) applyLimits(note3, event.clientX, event.clientY)
})

document.addEventListener('mouseup', () => {
    note.dom = null
    note2.dom = null
    note3.dom = null
})

// ─── FAQ ACCORDION ────────────────────────────────────────────────────
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('question')) return
    const answer = e.target.nextElementSibling
    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px"
})