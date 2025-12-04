interface FormData {
  name: string;
  email: string;
  role: string;
  message?: string;
}

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

export async function submitWaitlistForm(data: FormData): Promise<Web3FormsResponse> {
  const web3formsKey = import.meta.env.PUBLIC_WEB3FORMS_KEY;

  if (!web3formsKey) {
    throw new Error('Web3Forms API key not configured');
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      access_key: web3formsKey,
      ...data,
      subject: 'New VividKit Waitlist Signup',
      from_name: 'VividKit Website'
    })
  });

  if (!response.ok) {
    throw new Error(`Submission failed: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message || 'Submission failed');
  }

  return result;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateForm(data: FormData): { valid: boolean; errors: Partial<FormData> } {
  const errors: Partial<FormData> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.role) {
    errors.role = 'Please select your role';
  }

  if (data.message && data.message.length > 500) {
    errors.message = 'Message must be 500 characters or less';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}