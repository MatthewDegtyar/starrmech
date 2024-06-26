<script>
  import { onMount } from 'svelte';

  let name = '';
  let email = '';
  let phone = '';
  let message = '';
  let isButtonDisabled = false;

  const handleSubmit = async (/** @type {{ preventDefault: () => void; }} */ event) => {
    event.preventDefault(); // Prevent default form submission

    if (isButtonDisabled) {
      return; // Don't do anything if the button is disabled
    }

    const data = {
      name,
      phone,
      email,
      message,
      recipient_email: "accounts@starrmechanical.net",
    };

    isButtonDisabled=true; // Disable the button

    try {
      console.log('data',data)
      
      const response = await fetch('https://6a2qprknmi.execute-api.us-east-2.amazonaws.com/default/email_API', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response:', response);

      if (response.ok) {
        alert('Email sent successfully!');
        resetForm();
      } else {
        //alert('Failed to send email.');
        resetForm();
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }

    // Re-enable the button after a 5-second cooldown
    setTimeout(() => {
      isButtonDisabled = false;
    }, 5000);
  };

  const resetForm = () => {
    name = '';
    email = '';
    phone = '';
    message = '';
  };
</script>

<div class="text-[#444444]">
  <div class="flex flex-col items-center mt-8">
    <h1 class="text-center text-[#0092cd] contactTitle">Contact Us</h1>
    <div
      class="h-[1.25px] place-self-center mt-12 mb-16 w-[45%] bg-[#e2e2e2] self-center"
    ></div>
  </div>

  <main class="flex flex-col items-center w-full mb-16">
    <div
      class="px-[5vw] flex flex-col items-start lg:flex-row gap-16 lg:gap-48"
    >
      <div class="lg:w-[20%] flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-4">
        <div>
          <h2 class="uppercase text-xl text-[#0092cd]">Address</h2>
          <p class="mt-2">
            Starr Mechanical, Inc.<br />
            5011 Batten Place<br />
            Orlando, FL 32809
          </p>
        </div>
        <div>
          <h2 class="uppercase text-xl text-[#0092cd]">Phone</h2>
          <p class="mt-2">(407) 299-6552</p>
        </div>
        <div>
          <h2 class="uppercase text-xl text-[#0092cd]">Email</h2>
          <p class="mt-2">accounts@starrmechanical.net</p>
        </div>
      </div>
      <div class="lg:w-[30%]">
        <form on:submit={handleSubmit} class="flex flex-col items-center gap-6">
          <input
            placeholder="Name*"
            required
            bind:value={name}
            class="bg-neutral-100 rounded-md text-xl h-12 p-2 outline-1 outline-black w-72 sm:w-96"
          />
          <input
            placeholder="Email*"
            type="email"
            required
            bind:value={email}
            class="bg-neutral-100 rounded-md text-xl h-12 p-2 outline-1 outline-black w-72 sm:w-96"
          />
          <input
            placeholder="Phone*"
            required
            bind:value={phone}
            class="bg-neutral-100 rounded-md text-xl h-12 p-2 outline-1 outline-black w-72 sm:w-96"
          />
          <textarea
            placeholder="Inquery"
            bind:value={message}
            class="bg-neutral-100 rounded-md text-xl h-36 p-2 outline-1 outline-black w-72 sm:w-96"
          />
          <button
            type="submit"
            class="bg-[#0092cd] min-w-48 hover:bg-[#0075A3] text-white mt-6 p-4 rounded-xl"
            disabled={isButtonDisabled}
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
    </div>
  </main>
</div>
