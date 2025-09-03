export async function signupTS(username: string, password: string, role?: string) {
  const res = await fetch("http://localhost:3000/signup", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, role }),
    credentials: "include" // שולח cookies אם יש
  });
  return res;
};

export async function loginTS(username: string, password: string, role?: string) {
  const res = await fetch("http://localhost:3000/login", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, role }),
    credentials: "include" // שולח וקולט cookies אוטומטית
  });

  const data = await res.json();

  if (res.ok) {
    return {
      status: res.status,
      message: data.message || 'Login succeeded',
      data: data || null
    };
  } else {
    return {
      name: data.name,
      status: res.status,
      message: data.message || 'Login failed',
      playerId: data.playerId || null,
      role: data.role || null
    };
  }
}

export async function logoutTS() {
  const res = await fetch("http://localhost:3000/logout", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
    credentials: "include" // שולח cookies כדי שהשרת ידע מי מתנתק
  });

  const data = await res.json();

  if (res.ok) {
    return {
      status: res.status,
      message: data.message || 'Logout succeeded'
    };
  } else {
    return {
      status: res.status,
      message: data.message || 'Logout failed'
    };
  }
}

// פונקציה כללית ל־fetch עם cookies
export async function authFetch(url: string, options: RequestInit = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      'Content-Type': 'application/json',
    },
    credentials: "include" // שולח cookies אוטומטית
  });
}
