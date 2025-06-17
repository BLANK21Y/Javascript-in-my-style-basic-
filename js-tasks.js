// JavaScript Task definitions with exactly 10 tasks for each level
const tasks = {
    beginner: [
        {
            title: "Introduction to JavaScript",
            instructions: "Create a simple alert message and log something to the console.",
            expectedAnswer: "alert\\s*\\([^)]+\\)|console\\.log\\s*\\([^)]+\\)",
            hint: "Use alert('message') or console.log('message')",
            htmlStructure: "<div id='output'>JavaScript will update this</div>"
        },
        {
            title: "Variables",
            instructions: "Declare variables using let, const, and var.",
            expectedAnswer: "(let|const|var)\\s+\\w+\\s*=",
            hint: "Use let myVar = value; or const myConst = value;",
            htmlStructure: "<div id='variables'>Variables will be displayed here</div>"
        },
        {
            title: "Data Types",
            instructions: "Create variables with different data types: string, number, boolean.",
            expectedAnswer: "(let|const|var)\\s+\\w+\\s*=\\s*['\"][^'\"]*['\"]|(let|const|var)\\s+\\w+\\s*=\\s*\\d+|(let|const|var)\\s+\\w+\\s*=\\s*(true|false)",
            hint: "Create string with quotes, number without quotes, boolean true/false",
            htmlStructure: "<div id='datatypes'>Data types will be shown here</div>"
        },
        {
            title: "Operators",
            instructions: "Use arithmetic operators (+, -, *, /) and comparison operators.",
            expectedAnswer: "\\+|\\-|\\*|\\/|==|!=|>|<|>=|<=",
            hint: "Use operators like +, -, *, /, ==, !=, >, <",
            htmlStructure: "<div id='operators'>Results will appear here</div>"
        },
        {
            title: "Conditionals",
            instructions: "Create an if-else statement to check a condition.",
            expectedAnswer: "if\\s*\\([^)]+\\)\\s*\\{[^}]*\\}",
            hint: "Use if (condition) { code }",
            htmlStructure: "<div id='conditionals'>Conditional result will show here</div>"
        },
        {
            title: "Loops",
            instructions: "Create a for loop that runs 5 times.",
            expectedAnswer: "for\\s*\\([^)]*\\)\\s*\\{[^}]*\\}",
            hint: "Use for (let i = 0; i < 5; i++) { code }",
            htmlStructure: "<div id='loops'>Loop output will appear here</div>"
        },
        {
            title: "Functions",
            instructions: "Create a function that takes parameters and returns a value.",
            expectedAnswer: "function\\s+\\w+\\s*\\([^)]*\\)\\s*\\{[^}]*return[^}]*\\}",
            hint: "Use function name(params) { return value; }",
            htmlStructure: "<div id='functions'>Function result will show here</div>"
        },
        {
            title: "Scope",
            instructions: "Demonstrate global and local scope with variables.",
            expectedAnswer: "(let|const|var)\\s+\\w+\\s*=.*function.*\\{.*(let|const|var)\\s+\\w+",
            hint: "Create variables outside and inside functions",
            htmlStructure: "<div id='scope'>Scope demonstration will appear here</div>"
        },
        {
            title: "Events & DOM Manipulation",
            instructions: "Add an event listener to a button and change element content.",
            expectedAnswer: "addEventListener\\s*\\([^)]+\\)|onclick\\s*=|innerHTML\\s*=|textContent\\s*=",
            hint: "Use addEventListener or onclick, and innerHTML or textContent",
            htmlStructure: "<button id='myButton'>Click me!</button><div id='output'>Content will change</div>"
        },
        {
            title: "Basic DOM Selection",
            instructions: "Select and modify HTML elements using JavaScript.",
            expectedAnswer: "getElementById\\s*\\([^)]+\\)|querySelector\\s*\\([^)]+\\)",
            hint: "Use document.getElementById() or document.querySelector()",
            htmlStructure: "<div id='target'>This element should be modified</div><div id='result'>Result will show here</div>"
        }
    ],
    intermediate: [
        {
            title: "Arrays & Methods",
            instructions: "Create an array and use methods like push, pop, map, or filter.",
            expectedAnswer: "\\[.*\\]|new Array|\\.(push|pop|map|filter|forEach)\\s*\\(",
            hint: "Use array methods like push(), pop(), map(), filter()",
            htmlStructure: "<div id='arrays'>Array operations will show here</div>"
        },
        {
            title: "Objects & JSON",
            instructions: "Create an object and convert it to/from JSON.",
            expectedAnswer: "\\{[^}]*\\}|JSON\\.(stringify|parse)\\s*\\(",
            hint: "Create object with {} and use JSON.stringify() or JSON.parse()",
            htmlStructure: "<div id='objects'>Object data will appear here</div>"
        },
        {
            title: "ES6 Features",
            instructions: "Use arrow functions, template literals, and destructuring.",
            expectedAnswer: "=>|`[^`]*`|\\{[^}]*\\}\\s*=",
            hint: "Use () => {}, template literals with backticks, and destructuring",
            htmlStructure: "<div id='es6'>ES6 features will be demonstrated here</div>"
        },
        {
            title: "DOM Manipulation",
            instructions: "Use querySelector and manipulate multiple DOM elements.",
            expectedAnswer: "querySelector|querySelectorAll|getElementById|getElementsBy",
            hint: "Use querySelector(), getElementById(), or similar DOM methods",
            htmlStructure: "<div class='item'>Item 1</div><div class='item'>Item 2</div><div id='result'>DOM manipulation result</div>"
        },
        {
            title: "Event Listeners",
            instructions: "Add multiple event listeners and handle event delegation.",
            expectedAnswer: "addEventListener\\s*\\([^)]+\\)|removeEventListener",
            hint: "Use addEventListener() for multiple events",
            htmlStructure: "<div id='parent'><button class='child'>Button 1</button><button class='child'>Button 2</button></div><div id='eventResult'>Event results here</div>"
        },
        {
            title: "Timing Functions",
            instructions: "Use setTimeout and setInterval for delayed execution.",
            expectedAnswer: "setTimeout\\s*\\(|setInterval\\s*\\(",
            hint: "Use setTimeout() or setInterval() with callback functions",
            htmlStructure: "<div id='timer'>Timer will update here</div><button id='startTimer'>Start Timer</button>"
        },
        {
            title: "Error Handling",
            instructions: "Implement try-catch blocks and error handling.",
            expectedAnswer: "try\\s*\\{|catch\\s*\\(|throw\\s+|finally\\s*\\{",
            hint: "Use try-catch-finally blocks and throw custom errors",
            htmlStructure: "<div id='errors'>Error handling demonstration will show here</div><button id='triggerError'>Trigger Error</button>"
        },
        {
            title: "Regular Expressions",
            instructions: "Use regular expressions for pattern matching.",
            expectedAnswer: "\\/[^/]+\\/[gimuy]*|new RegExp\\s*\\(|\\.(test|match|replace)\\s*\\(",
            hint: "Use /pattern/flags or new RegExp() with test(), match(), replace()",
            htmlStructure: "<input id='regexInput' placeholder='Enter text to validate'><div id='regexResult'>Regex result will show here</div>"
        },
        {
            title: "Form Validation",
            instructions: "Validate form inputs using JavaScript.",
            expectedAnswer: "value\\s*==|value\\s*!=|length\\s*>|length\\s*<|checkValidity\\s*\\(|setCustomValidity\\s*\\(",
            hint: "Check input values, length, or use validation methods",
            htmlStructure: "<form><input id='emailInput' type='email' placeholder='Enter email'><button type='button' id='validateForm'>Validate</button></form><div id='validationResult'>Validation result here</div>"
        },
        {
            title: "Local Storage",
            instructions: "Store and retrieve data using localStorage.",
            expectedAnswer: "localStorage\\.(setItem|getItem|removeItem|clear)",
            hint: "Use localStorage.setItem(), getItem(), removeItem()",
            htmlStructure: "<input id='storageInput' placeholder='Enter data'><button id='saveData'>Save</button><button id='loadData'>Load</button><div id='storageResult'>Storage result here</div>"
        }
    ],
    advanced: [
        {
            title: "Classes and Inheritance",
            instructions: "Create a class with constructor and methods, then extend it.",
            expectedAnswer: "class\\s+\\w+|constructor\\s*\\(|extends\\s+\\w+",
            hint: "Use class ClassName, constructor(), and extends for inheritance",
            htmlStructure: "<div id='classes'>Class instances will be shown here</div>"
        },
        {
            title: "Promises and Async/Await",
            instructions: "Create a Promise and use async/await to handle it.",
            expectedAnswer: "new Promise\\s*\\(|async\\s+function|await\\s+",
            hint: "Use new Promise(), async function, and await keyword",
            htmlStructure: "<div id='promises'>Promise results will appear here</div><button id='asyncTest'>Test Async</button>"
        },
        {
            title: "Fetch API and AJAX",
            instructions: "Make an HTTP request using fetch API.",
            expectedAnswer: "fetch\\s*\\(|XMLHttpRequest",
            hint: "Use fetch() to make HTTP requests",
            htmlStructure: "<div id='fetchResult'>Fetch results will show here</div><button id='fetchData'>Fetch Data</button>"
        },
        {
            title: "Modules",
            instructions: "Use import/export statements (simulate with objects).",
            expectedAnswer: "export\\s+(default\\s+)?|import\\s+.*from|module\\.exports|require\\s*\\(",
            hint: "Use export/import syntax or module.exports/require",
            htmlStructure: "<div id='modules'>Module demonstration will appear here</div>"
        },
        {
            title: "Closures & Callback Functions",
            instructions: "Create a closure and implement callback patterns.",
            expectedAnswer: "function.*\\{.*function.*\\{|\\w+\\s*\\([^)]*function|\\w+\\s*\\([^)]*=>",
            hint: "Create nested functions or pass functions as parameters",
            htmlStructure: "<div id='closures'>Closure examples will show here</div>"
        },
        {
            title: "Functional Programming",
            instructions: "Use higher-order functions, pure functions, and immutability.",
            expectedAnswer: "\\.(map|filter|reduce)\\s*\\(|=>|function.*return",
            hint: "Use map(), filter(), reduce() and pure functions",
            htmlStructure: "<div id='functional'>Functional programming examples will show here</div>"
        },
        {
            title: "Web APIs",
            instructions: "Use a Web API like Geolocation, Canvas, or Date.",
            expectedAnswer: "navigator\\.|canvas|getContext|new Date|Date\\.",
            hint: "Use navigator.geolocation, canvas context, or Date API",
            htmlStructure: "<canvas id='myCanvas' width='200' height='100'></canvas><div id='apiResult'>Web API results here</div>"
        },
        {
            title: "Design Patterns",
            instructions: "Implement common JavaScript design patterns like Module or Observer.",
            expectedAnswer: "\\(function\\s*\\(\\)|\\{[^}]*return\\s*\\{|addEventListener\\s*\\([^)]*\\)|removeEventListener",
            hint: "Use IIFE, revealing module pattern, or observer pattern",
            htmlStructure: "<div id='patterns'>Design pattern implementation will show here</div>"
        },
        {
            title: "Performance Optimization",
            instructions: "Implement performance optimizations like debouncing or memoization.",
            expectedAnswer: "debounce|throttle|memoize|setTimeout.*clearTimeout",
            hint: "Implement debouncing, throttling, or memoization patterns",
            htmlStructure: "<input id='performanceInput' placeholder='Type to test debouncing'><div id='performanceResult'>Performance optimization results</div>"
        },
        {
            title: "Testing & Debugging",
            instructions: "Write simple test functions to validate code behavior.",
            expectedAnswer: "test|expect|assert|describe|it\\s*\\(|function.*test",
            hint: "Create test functions or use testing patterns",
            htmlStructure: "<div id='testing'>Test results will appear here</div><button id='runTests'>Run Tests</button>"
        }
    ]
};

// Progress tracking - Fixed to only track 3 levels
let progress = {
    beginner: 0,
    intermediate: 0,
    advanced: 0
};

// Current active editor
let activeEditor = 'js';

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('jsTheme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('jsTheme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Progress management - Fixed to handle only 3 levels
function updateProgress() {
    const levels = ['beginner', 'intermediate', 'advanced'];
    let totalCompleted = 0;
    
    levels.forEach(level => {
        const progressBar = document.getElementById(`${level}Progress`);
        const progressText = progressBar.parentElement.nextElementSibling;
        const completed = progress[level] || 0;
        const total = tasks[level] ? tasks[level].length : 10;
        
        if (progressBar && progressText) {
            progressBar.style.width = `${(completed / total) * 100}%`;
            progressBar.setAttribute('data-progress', (completed / total) * 100);
            progressText.textContent = `${completed}/${total} completed`;
        }
        
        totalCompleted += completed;
    });
    
    // Update certificate status
    updateCertificateStatus(totalCompleted);
}

function updateCertificateStatus(completed) {
    const certificateStatus = document.getElementById('certificateStatus');
    const certificateGenerator = document.getElementById('certificateGenerator');
    
    if (certificateStatus) {
        if (completed === 30) {
            certificateStatus.innerHTML = '<div class="lock-icon">🏆</div><span>30/30 Tasks Completed - Certificate Available!</span>';
            if (certificateGenerator) {
                certificateGenerator.style.display = 'block';
            }
        } else {
            certificateStatus.innerHTML = `<div class="lock-icon">🔒</div><span>${completed}/30 Tasks Completed</span>`;
            if (certificateGenerator) {
                certificateGenerator.style.display = 'none';
            }
        }
    }
}

// Tab switching
function switchTab(tabName) {
    const htmlTab = document.getElementById('htmlTab');
    const jsTab = document.getElementById('jsTab');
    const htmlEditor = document.getElementById('htmlEditor');
    const jsEditor = document.getElementById('jsEditor');
    
    if (tabName === 'html') {
        if (htmlTab) htmlTab.classList.add('active');
        if (jsTab) jsTab.classList.remove('active');
        if (htmlEditor) htmlEditor.style.display = 'block';
        if (jsEditor) jsEditor.style.display = 'none';
        activeEditor = 'html';
    } else {
        if (jsTab) jsTab.classList.add('active');
        if (htmlTab) htmlTab.classList.remove('active');
        if (jsEditor) jsEditor.style.display = 'block';
        if (htmlEditor) htmlEditor.style.display = 'none';
        activeEditor = 'js';
    }
}

// Task management
function startTask(level, taskIndex) {
    const task = tasks[level][taskIndex];
    const mainContent = document.getElementById('mainContent');
    const editorInterface = document.getElementById('editorInterface');
    const taskInstructions = document.getElementById('taskInstructions');
    const htmlEditor = document.getElementById('htmlEditor');
    const jsEditor = document.getElementById('jsEditor');
    const backToMain = document.getElementById('backToMain');
    const previewPanel = document.getElementById('previewPanel');
    
    console.log('Starting task:', level, taskIndex, task);
    
    // Show editor interface
    if (mainContent) mainContent.style.display = 'none';
    if (editorInterface) editorInterface.style.display = 'block';
    if (backToMain) backToMain.style.display = 'block';
    
    // Always show preview panel
    if (previewPanel) previewPanel.style.display = 'flex';
    
    // Set task instructions
    if (taskInstructions) {
        taskInstructions.innerHTML = `
            <h3>${task.title}</h3>
            <p><strong>Instructions:</strong> ${task.instructions}</p>
            <p><strong>Hint:</strong> ${task.hint}</p>
        `;
    }
    
    // Set up HTML structure
    if (htmlEditor) {
        htmlEditor.value = task.htmlStructure || '<div>Your HTML structure here</div>';
    }
    
    // Clear JS editor
    if (jsEditor) {
        jsEditor.value = '';
    }
    
    // Start with JS tab active
    switchTab('js');
    
    // Store current task info
    window.currentTask = { level, taskIndex };
    
    // Update task status
    updateTaskStatus(level, taskIndex, 'in-progress');
    
    // Set up live preview
    setupLivePreview();
}

function setupLivePreview() {
    const htmlEditor = document.getElementById('htmlEditor');
    const jsEditor = document.getElementById('jsEditor');
    
    // Remove existing event listeners
    if (htmlEditor) {
        htmlEditor.removeEventListener('input', updatePreview);
        htmlEditor.addEventListener('input', updatePreview);
    }
    
    if (jsEditor) {
        jsEditor.removeEventListener('input', updatePreview);
        jsEditor.addEventListener('input', updatePreview);
    }
    
    // Initial preview update
    updatePreview();
}

function updatePreview() {
    const htmlEditor = document.getElementById('htmlEditor');
    const jsEditor = document.getElementById('jsEditor');
    const previewFrame = document.getElementById('previewFrame');
    
    if (!htmlEditor || !jsEditor || !previewFrame) return;
    
    const htmlCode = htmlEditor.value;
    const jsCode = jsEditor.value;
    
    // Create HTML document for preview
    const htmlDocument = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Live Preview</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    margin: 20px; 
                    background: white;
                    color: #333;
                    padding: 20px;
                }
                button {
                    background: #f7df1e;
                    color: #323330;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin: 5px;
                }
                button:hover {
                    background: #f0db4f;
                }
                input {
                    padding: 8px;
                    margin: 5px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                #output, #result, #variables, #datatypes, #operators, #conditionals, #loops, #functions, #scope, #arrays, #objects, #es6, #eventResult, #timer, #classes, #promises, #fetchResult, #modules, #closures, #storageResult, #apiResult, #functional, #typescript, #performanceResult, #pwa, #testing, #state, #errors, #wasm, #target, #validationResult, #regexResult {
                    margin: 10px 0;
                    padding: 10px;
                    background: #f8f9fa;
                    border-radius: 4px;
                    border: 1px solid #e9ecef;
                }
                canvas {
                    border: 1px solid #ccc;
                    margin: 10px 0;
                }
                .item {
                    margin: 5px 0;
                    padding: 10px;
                    background: #e9ecef;
                    border-radius: 4px;
                }
            </style>
        </head>
        <body>
            ${htmlCode || '<p style="color: #999; font-style: italic;">Add HTML structure and JavaScript code to see the live preview...</p>'}
            <script>
                try {
                    ${jsCode}
                } catch (error) {
                    console.error('JavaScript Error:', error);
                    document.body.innerHTML += '<div style="color: red; background: #ffe6e6; padding: 10px; margin: 10px 0; border-radius: 4px;">Error: ' + error.message + '</div>';
                }
            </script>
        </body>
        </html>
    `;
    
    // Update preview
    previewFrame.srcdoc = htmlDocument;
}

function updateTaskStatus(level, taskIndex, status) {
    const statusElement = document.getElementById(`${level}-${taskIndex}-status`);
    if (statusElement) {
        statusElement.textContent = status === 'completed' ? 'Completed' : 
                                   status === 'in-progress' ? 'In Progress' : 'Not Started';
        statusElement.className = `task-status ${status}`;
    }
}

function runCode() {
    // The preview is already live, but we can add a visual indication that code was run
    const runBtn = document.getElementById('runCode');
    if (runBtn) {
        const originalText = runBtn.textContent;
        
        runBtn.textContent = '✓ Running...';
        runBtn.style.background = '#38a169';
        
        setTimeout(() => {
            runBtn.textContent = originalText;
            runBtn.style.background = '';
        }, 1000);
    }
    
    // Update preview (though it's already updating live)
    updatePreview();
}

function validateCode() {
    const jsEditor = document.getElementById('jsEditor');
    const validationResult = document.getElementById('validationResult');
    const currentTask = window.currentTask;
    
    if (!jsEditor || !validationResult || !currentTask) {
        console.log('Missing elements for validation');
        return;
    }
    
    const jsCode = jsEditor.value.trim();
    
    console.log('Validating JavaScript code:', jsCode, 'Current task:', currentTask);
    
    const task = tasks[currentTask.level][currentTask.taskIndex];
    const expectedRegex = new RegExp(task.expectedAnswer, 'is');
    
    // Remove extra whitespace and normalize code for comparison
    const normalizedCode = jsCode.replace(/\s+/g, ' ').trim();
    
    console.log('Expected regex:', task.expectedAnswer);
    console.log('Normalized code:', normalizedCode);
    console.log('Regex test result:', expectedRegex.test(normalizedCode));
    
    if (expectedRegex.test(normalizedCode)) {
        // Task completed successfully
        validationResult.innerHTML = '✅ Excellent! Your JavaScript code meets the requirements.';
        validationResult.className = 'validation-result success';
        validationResult.style.display = 'block';
        
        // Update progress
        progress[currentTask.level] = Math.max(progress[currentTask.level] || 0, currentTask.taskIndex + 1);
        updateTaskStatus(currentTask.level, currentTask.taskIndex, 'completed');
        updateProgress();
        
        // Save progress
        saveProgress();
        
        // Auto-hide validation result after 3 seconds
        setTimeout(() => {
            validationResult.style.display = 'none';
        }, 3000);
        
    } else {
        // Task not completed
        validationResult.innerHTML = '❌ Your JavaScript code doesn\'t match the requirements. Please try again!';
        validationResult.className = 'validation-result error';
        validationResult.style.display = 'block';
        
        // Auto-hide validation result after 5 seconds
        setTimeout(() => {
            validationResult.style.display = 'none';
        }, 5000);
    }
}

function backToTasks() {
    const mainContent = document.getElementById('mainContent');
    const editorInterface = document.getElementById('editorInterface');
    const validationResult = document.getElementById('validationResult');
    const backToMain = document.getElementById('backToMain');
    const htmlEditor = document.getElementById('htmlEditor');
    const jsEditor = document.getElementById('jsEditor');
    
    // Hide editor interface
    if (editorInterface) editorInterface.style.display = 'none';
    if (mainContent) mainContent.style.display = 'block';
    if (backToMain) backToMain.style.display = 'none';
    
    // Hide validation result
    if (validationResult) validationResult.style.display = 'none';
    
    // Remove live preview event listeners
    if (htmlEditor) htmlEditor.removeEventListener('input', updatePreview);
    if (jsEditor) jsEditor.removeEventListener('input', updatePreview);
    
    // Clear current task
    window.currentTask = null;
}

// Certificate generation with JavaScript template (2.png or 2.jpg)
function generateCertificate() {
    const userNameInput = document.getElementById('userName');
    const generatedCertificate = document.getElementById('generatedCertificate');
    const canvas = document.getElementById('certificateCanvas');
    
    if (!userNameInput || !generatedCertificate || !canvas) return;
    
    const userName = userNameInput.value || 'John Doe';
    const ctx = canvas.getContext('2d');
    
    console.log('Generating certificate for:', userName);
    
    // Set high-resolution canvas for crisp output
    const scale = window.devicePixelRatio || 2;
    const width = 1200;
    const height = 900;
    
    // Set actual canvas size
    canvas.width = width * scale;
    canvas.height = height * scale;
    
    // Scale the canvas back down using CSS
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    
    // Scale the drawing context so everything draws at the higher resolution
    ctx.scale(scale, scale);
    
    // Enable anti-aliasing for smoother text
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // Show the certificate section
    generatedCertificate.style.display = 'block';
    
    // Try to load the JavaScript certificate template
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = function() {
        console.log('JavaScript certificate template loaded');
        // Clear canvas and draw template
        ctx.clearRect(0, 0, width, height);
        
        // Draw image with high quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);
        
        // Add user name with high-quality text rendering
        ctx.font = 'bold 48px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#323330';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Add text shadow for better visibility
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;
        
        ctx.fillText(userName, width / 2, 450);
        
        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        
        // Add current date
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        ctx.font = '24px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText(`Completed on ${currentDate}`, width / 2, 720);
    };
    
    img.onerror = function() {
        console.error('Failed to load JavaScript certificate template, creating fallback');
        // Create a high-quality fallback certificate with JavaScript theme
        ctx.clearRect(0, 0, width, height);
        
        // Background with JavaScript colors
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#f7df1e');
        gradient.addColorStop(1, '#323330');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Add overlay for better text readability
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(50, 50, width - 100, height - 100);
        
        // Decorative border with JavaScript colors
        ctx.strokeStyle = '#f7df1e';
        ctx.lineWidth = 8;
        ctx.strokeRect(40, 40, width - 80, height - 80);
        
        // Inner border
        ctx.strokeStyle = '#323330';
        ctx.lineWidth = 4;
        ctx.strokeRect(60, 60, width - 120, height - 120);
        
        // Title
        ctx.fillStyle = '#323330';
        ctx.font = 'bold 72px "Inter", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 6;
        
        ctx.fillText('Certificate of Completion', width / 2, 180);
        
        // Subtitle
        ctx.font = '36px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#f7df1e';
        ctx.fillText('JavaScript Learning Platform', width / 2, 240);
        
        // User name
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;
        
        ctx.font = 'bold 48px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#323330';
        ctx.fillText(userName, width / 2, 450);
        
        // Description
        ctx.shadowColor = 'transparent';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        
        ctx.font = '28px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#4a5568';
        ctx.fillText('has successfully completed all 30 JavaScript learning tasks', width / 2, 510);
        
        // Achievement badge
        ctx.font = '24px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#48bb78';
        ctx.fillText('★ JavaScript Master ★', width / 2, 570);
        
        // Date
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        ctx.font = '24px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText(`Completed on ${currentDate}`, width / 2, 720);
        
        // Signatures placeholder
        ctx.font = '20px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#888';
        ctx.fillText('JavaScript Learning Platform', width / 2, 780);
        
        // Decorative JavaScript logo elements
        ctx.fillStyle = '#f7df1e';
        ctx.fillRect(120, 120, 60, 60);
        ctx.fillStyle = '#323330';
        ctx.font = 'bold 36px "Inter", Arial, sans-serif';
        ctx.fillText('JS', 150, 155);
        
        ctx.fillStyle = '#f7df1e';
        ctx.fillRect(width - 180, 120, 60, 60);
        ctx.fillStyle = '#323330';
        ctx.fillText('JS', width - 150, 155);
        
        ctx.fillStyle = '#f7df1e';
        ctx.fillRect(120, height - 180, 60, 60);
        ctx.fillStyle = '#323330';
        ctx.fillText('JS', 150, height - 145);
        
        ctx.fillStyle = '#f7df1e';
        ctx.fillRect(width - 180, height - 180, 60, 60);
        ctx.fillStyle = '#323330';
        ctx.fillText('JS', width - 150, height - 145);
    };
    
    // Try both possible certificate template names
    img.src = '1.png';
    img.onerror = function() {
        img.src = '1.jpg';
    };
}

function downloadCertificate(format) {
    const canvas = document.getElementById('certificateCanvas');
    const userNameInput = document.getElementById('userName');
    
    if (!canvas || !userNameInput) return;
    
    const userName = userNameInput.value || 'John Doe';
    
    console.log('Downloading certificate as:', format);
    
    if (format === 'pdf') {
        // For PDF, use high-quality PNG conversion
        const imgData = canvas.toDataURL('image/png', 1.0);
        
        // Create a new window with the image for printing as PDF
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>JavaScript Certificate - ${userName}</title>
                    <style>
                        @media print {
                            body { margin: 0; }
                            img { max-width: 100%; height: auto; page-break-inside: avoid; }
                        }
                    </style>
                </head>
                <body style="margin:0; display:flex; justify-content:center; align-items:center; min-height:100vh;">
                    <img src="${imgData}" style="max-width:100%; height:auto;">
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
        return;
    }
    
    // For image formats, use maximum quality
    let mimeType, quality;
    if (format === 'png') {
        mimeType = 'image/png';
        quality = 1.0;
    } else {
        mimeType = 'image/jpeg';
        quality = 0.95;
    }
    
    const link = document.createElement('a');
    link.download = `javascript-certificate-${userName.replace(/\s+/g, '-').toLowerCase()}.${format}`;
    link.href = canvas.toDataURL(mimeType, quality);
    link.click();
}

// Save progress to localStorage
function saveProgress() {
    const progressData = {
        progress: progress,
        timestamp: new Date().toISOString(),
        version: '1.0'
    };
    localStorage.setItem('jsLearningProgress', JSON.stringify(progressData));
    console.log('Progress saved:', progressData);
}

// Load progress from localStorage
function loadProgress() {
    const savedData = localStorage.getItem('jsLearningProgress');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            
            if (parsedData.progress) {
                progress = { ...progress, ...parsedData.progress };
                console.log('Progress loaded (new format):', parsedData);
            } else {
                progress = { ...progress, ...parsedData };
                console.log('Progress loaded (old format):', parsedData);
            }
            
            // Update task statuses
            Object.keys(progress).forEach(level => {
                const completed = progress[level] || 0;
                for (let i = 0; i < completed; i++) {
                    updateTaskStatus(level, i, 'completed');
                }
            });
        } catch (error) {
            console.error('Error loading progress:', error);
            progress = { beginner: 0, intermediate: 0, advanced: 0 };
        }
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Initialize theme
    initializeTheme();
    
    // Load saved progress
    loadProgress();
    
    // Initialize progress display
    updateProgress();
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        console.log('Theme toggle listener added');
    }
    
    // Back to home button
    const backToHomeBtn = document.getElementById('backToHome');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
        console.log('Back to home button listener added');
    }
    
    // Tab switching
    const htmlTab = document.getElementById('htmlTab');
    const jsTab = document.getElementById('jsTab');
    
    if (htmlTab) {
        htmlTab.addEventListener('click', () => switchTab('html'));
    }
    
    if (jsTab) {
        jsTab.addEventListener('click', () => switchTab('js'));
    }
    
    // Task start buttons
    document.querySelectorAll('.start-task-btn').forEach(button => {
        button.addEventListener('click', function() {
            const taskCard = this.closest('.task-card');
            if (taskCard) {
                const level = taskCard.getAttribute('data-level');
                const taskIndex = parseInt(taskCard.getAttribute('data-task'));
                startTask(level, taskIndex);
            }
        });
    });
    
    // Editor actions
    const runCodeBtn = document.getElementById('runCode');
    const validateCodeBtn = document.getElementById('validateCode');
    const backToTasksBtn = document.getElementById('backToTasks');
    const backToMainBtn = document.getElementById('backToMain');
    
    if (runCodeBtn) {
        runCodeBtn.addEventListener('click', runCode);
        console.log('Run code button listener added');
    }
    
    if (validateCodeBtn) {
        validateCodeBtn.addEventListener('click', validateCode);
        console.log('Validate code button listener added');
    }
    
    if (backToTasksBtn) {
        backToTasksBtn.addEventListener('click', backToTasks);
        console.log('Back to tasks button listener added');
    }
    
    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', backToTasks);
        console.log('Back to main button listener added');
    }
    
    // Certificate generation
    const generateCertBtn = document.getElementById('generateCertificate');
    if (generateCertBtn) {
        generateCertBtn.addEventListener('click', generateCertificate);
        console.log('Generate certificate button listener added');
    }
    
    console.log('All event listeners initialized');
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to validate code
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (window.currentTask) {
            validateCode();
        }
    }
    
    // Escape to go back to tasks
    if (e.key === 'Escape') {
        if (window.currentTask) {
            backToTasks();
        }
    }
    
    // Ctrl/Cmd + 1 for HTML tab, Ctrl/Cmd + 2 for JS tab
    if ((e.ctrlKey || e.metaKey) && e.key === '1') {
        e.preventDefault();
        switchTab('html');
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === '2') {
        e.preventDefault();
        switchTab('js');
    }
});
