// Regex for Email validation
const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// // Setup Firebase
// var config = {
//     apiKey: "", // Enter the Firebase API key
//     authDomain: "", // Enter the Firebase Authentication Domain
//     databaseURL: "" // Enter the Firebase Database URL
// };

// firebase.initializeApp(config);

// var usersRef = firebase.database().ref("users");

// Create Vue app
var app = new Vue({
    el: '#app',
    vuetify: new Vuetify({}),
    data: () => ({

        newUser: {
            firstname: '',
            lastname: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zipcode: '',
            email: '',

            // An list containing names of all states
            options: [{ text: 'Andaman and Nicobar Islands', value: 1 }, { text: 'Andhra Pradesh', value: 2 },{ text: 'Arunachal Pradesh', value: 3 }, { text: 'Assam', value: 4 }, { text: 'Bihar', value: 5 }, { text: 'Chandigarh', value: 6 }, { text: 'Chhattisgarh', value: 7 }, { text: 'Dadra and Nagar Haveli and Daman and Diu', value: 8 }, { text: 'Delhi', value: 9 }, { text: 'Goa', value: 10 }, { text: 'Gujarat', value: 11 }, { text: 'Haryana', value: 12 }, { text: 'Himachal Pradesh', value: 13 }, { text: 'Jammu and Kashmir', value: 14 }, { text: 'Jharkhand', value: 15 }, { text: 'Karnataka', value: 16 }, { text: 'Kerala', value: 17 }, { text: 'Ladakh', value: 18 }, { text: 'Lakshadweep', value: 19 }, { text: 'Madhya Pradesh', value: 20 }, { text: 'Maharashtra', value: 21 }, { text: 'Manipur', value: 22 }, { text: 'Meghalaya', value: 23 }, { text: 'Mizoram', value: 24 }, { text: 'Nagaland', value: 25 }, { text: 'Odisha', value: 26 }, { text: 'Puducherry', value: 27 }, { text: 'Punjab', value: 28 }, { text: 'Rajasthan', value: 29 }, { text: 'Sikkim', value: 30 }, { text: 'Tamil Nadu', value: 31 }, { text: 'Telangana', value: 32 }, { text: 'Tripura', value: 33 }, { text: 'Uttar Pradesh', value: 34 }, { text: 'Uttarakhand', value: 35 }, { text: 'West Bengal', value: 36 }],

            valid: true,
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
            ],
            numRules: [v  => {
                if (!v.trim()) return true;
                if (!isNaN(parseFloat(v)) && v >= 100000 && v <= 999999) return true;
                return 'Zipcode has to be 6 digits';
            }]
        }
    }),
    
    // // Firebase binding
    // firebase: {
    //     users: usersRef
    //   },

    // Computed Property for Form Validation State
    computed: {
        validation: function() {
          return {
            name: !!this.newUser.name.trim(),
            email: emailRE.test(this.newUser.email)
          };
        },
        isValid: function() {
          var validation = this.validation;
          return Object.keys(validation).every(function(key) {
            return validation[key];
          });
        }
    },

    // User Addition Method
    methods: {
        validate () {
            this.$refs.form.validate()
        },
        // addUser: function() {
        //   if (this.isValid) {
        //     usersRef.push(this.newUser);
        //     this.newUser.name = "";
        //     this.newUser.email = "";
        //   }
        // },
    }
})