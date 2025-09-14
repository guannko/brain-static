// Authentication helper functions
const API_URL = 'https://brain-index-geo-monolith-production.up.railway.app/api';

// Check if user is authenticated
function checkAuth() {
    const token = localStorage.getItem('jwt_token');
    return token !== null;
}

// Get auth header
function getAuthHeader() {
    const token = localStorage.getItem('jwt_token');
    if (token) {
        return { 'Authorization': `Bearer ${token}` };
    }
    return {};
}

// Logout function
function logout() {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user_email');
    window.location.href = 'login.html';
}

// Protect page - redirect to login if not authenticated
function protectPage() {
    if (!checkAuth()) {
        window.location.href = 'login.html';
    }
}

// Update navigation based on auth status
function updateNavigation() {
    const isAuthenticated = checkAuth();
    const userEmail = localStorage.getItem('user_email');
    
    // Find nav elements
    const navRight = document.querySelector('.navbar-nav.nav-flex-icons');
    
    if (navRight) {
        if (isAuthenticated) {
            // Show user menu
            navRight.innerHTML = `
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown">
                        <i class="fas fa-user-circle mr-2"></i>${userEmail || 'Account'}
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="dashboard.html">
                            <i class="fas fa-chart-line mr-2"></i>Dashboard
                        </a>
                        <a class="dropdown-item" href="profile.html">
                            <i class="fas fa-user mr-2"></i>Profile
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#" onclick="logout()">
                            <i class="fas fa-sign-out-alt mr-2"></i>Logout
                        </a>
                    </div>
                </li>
            `;
        } else {
            // Show login/register
            navRight.innerHTML = `
                <li class="nav-item mr-2">
                    <a href="login.html" class="nav-link text-dark">
                        <i class="fas fa-sign-in-alt mr-2"></i>Login
                    </a>
                </li>
                <li class="nav-item">
                    <a href="register.html" class="nav-link border border-primary rounded text-primary">
                        <i class="fas fa-user-plus mr-2"></i>Sign Up
                    </a>
                </li>
            `;
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateNavigation();
});