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

export interface ValidationMessages {
  name: string;
  email: string;
  role: string;
  message: string;
}

export function validateForm(
  data: FormData,
  messages: ValidationMessages
): { valid: boolean; errors: Partial<FormData> } {
  const errors: Partial<FormData> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = messages.name;
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = messages.email;
  }

  if (!data.role) {
    errors.role = messages.role;
  }

  if (data.message && data.message.length > 500) {
    errors.message = messages.message;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}
