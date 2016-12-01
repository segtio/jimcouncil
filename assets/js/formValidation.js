function isNumber(e) {
    e=e ? e: window.event;
    var a=e.which ? e.which: e.keyCode;
    return a > 31 && (48 > a || a > 57) ? !1: !0
}

$(document).ready(function () {
    $("#formSubscribe").bootstrapValidator( {
        fields: {
            email: {
                validators: {
                    emailAddress: {
                        message: "The input is not a valid Email Address"
                    }
                    , notEmpty: {
                        message: "The Email Address is required and cannot be empty"
                    }
                }
            }
        }
    }
    ).on("success.form.bv", function (e) {
        e.preventDefault(), $.post("Subscribesend.php", {
            emai: $("#semail").val()
        }
        ).done(function (e) {
            1==e ? $("#SubscribeSuccessMessage").html("<strong>Thank you</strong> for Subscribe us. We have received your message.").show(): $("#SubscribetErrorMessage").html("<strong>Oops!</strong> Something went wrong. Please could you submit it again?").show(), $("#formSubscribe")[0].reset()
        }
        )
    }
    ), $("#formcontect").bootstrapValidator( {
        live: "disabled", fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: "The name is required and cannot be empty"
                    }
                }
            }
            , email: {
                validators: {
                    emailAddress: {
                        message: "The input is not a valid email address"
                    }
                    , notEmpty: {
                        message: "The Email Address is required and cannot be empty"
                    }
                }
            }
            , cnumber: {
                validators: {
                    notEmpty: {
                        message: "The Contact Number is required and cannot be empty"
                    }
                }
            }
            , cname: {
                validators: {
                    notEmpty: {
                        message: "The company name is required and cannot be empty"
                    }
                }
            }
        }
    }
    ).on("submit", function (e) {
        var a=recaptcha1;
        return void 0==a ? (e.preventDefault(), $("#recaptcha-error").show()): $("#recaptcha-error").hide(), e.isDefaultPrevented() ? !1: ($.post("contactdatasend.php", {
            name: $("#cfname").val(), emai: $("#cfemail").val(), ccompany: $("#cfcompany").val(), numb: $("#cfcontact").val(), cfbudget: $("#cfbudget").val(), cmsg: $("#cfmsg").val()
        }
        ).done(function (e) {
        alert(e);
            1==e ? $("#FormContactSuccessMessage").html("<strong>Thank you</strong> for contacting us. We have received your message.").show(): $("#FormContactErrorMessage").html("<strong>Oops!</strong> Something went wrong. Please could you submit it again?").show(), $("#formcontect")[0].reset()
        }
        ), !1)
    }
    ), $("#formfooter").bootstrapValidator( {
        fields: {
            Name: {
                container: "#formerrr", validators: {
                    notEmpty: {
                        message: "The name is required and cannot be empty"
                    }
                }
            }
            , Email: {
                container: "#formerrr", validators: {
                    emailAddress: {
                        message: "The input is not a valid email address"
                    }
                    , notEmpty: {
                        message: "The emailAddress is required and cannot be empty"
                    }
                }
            }
            , Contact: {
                container: "#formerrr", validators: {
                    notEmpty: {
                        message: "The Contact Number is required and cannot be empty"
                    }
                }
            }
            , Company: {
                container: "#formerrr", validators: {
                    notEmpty: {
                        message: "The company name is required and cannot be empty"
                    }
                }
            }
        }
    }
    ).on("submit", function (e) {
        var a=recaptcha2;
        var data =  {
            name: $("#cname").val(), mai: $("#cemail").val(), ccompany: $("#ccompany").val(), numb: $("#ccnumber").val(), cmsg: $("#cmsg").val()
        };
        return void 0==a ? (e.preventDefault(), $("#recaptchaasd").show()): $("#recaptchaasd").hide(), e.isDefaultPrevented() ? !1: (

            $.ajax({
                url: "https://api.mailgun.net/v3/samples.mailgun.org/messages",
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Authorization", "Basic " + btoa("api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0"));
                },
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                processData: false,
                data: data,
                success:function (e) {
                    1==e ? $("#ContactSuccessMessage").html("<strong>Thank you</strong> for contacting us. We have received your message.").show(): $("#ContactErrorMessage").html("<strong>Oops!</strong> Something went wrong. Please could you submit it again?").show(), $("#formfooter")[0].reset()
                },
                error: function(){
                    alert("Cannot get data");
                }
            }), !1)}
    ), $("#frmsignup").bootstrapValidator( {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: "The username is required and cannot be empty"
                    }
                }
            }
            , email: {
                validators: {
                    emailAddress: {
                        message: "The input is not a valid email address"
                    }
                    , notEmpty: {
                        message: "The emailAddress is required and cannot be empty"
                    }
                }
            }
            , pass: {
                validators: {
                    notEmpty: {
                        message: "The password is required and cannot be empty"
                    }
                }
            }
            , cpass: {
                validators: {
                    notEmpty: {
                        message: "The Confirm password is required and cannot be empty"
                    }
                    , identical: {
                        field: "pass", message: "The password and its confirm are not the same"
                    }
                }
            }
            , remember: {
                validators: {
                    notEmpty: {
                        message: "Please agree to the Terms and Conditions"
                    }
                }
            }
        }
    }
    ), $("#defaultForm").bootstrapValidator( {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: "The username is required and cannot be empty"
                    }
                }
            }
            , password: {
                validators: {
                    notEmpty: {
                        message: "The password is required and cannot be empty"
                    }
                }
            }
        }
    }
    )
}

);