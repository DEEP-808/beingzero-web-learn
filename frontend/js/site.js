var newId = 4
    var newTest = { 'name': null, 'id': newId, 'Articels': null }

    $('#add-test').on('click', function () {
        $('.form-wrapper').removeClass('hidden')
    })

    $('#test-result').on('keyup', function () {
        newTest.Articels = $(this).val()
        console.log(newTest)

    })

    $('#test-name').on('change', function () {
        newTest.name = $(this).val()
       console.log(newTest)
    })

    $('#create-test').on('click', function () {
        if (newTest.name == null) {
            alert('No test selected!')
        } else {
            addRow(newTest)
            $('#test-name').val('')
            $('#test-result').val('')
            $('.form-wrapper').addClass('hidden')

            $.post('/crud/post',{
                name: newTest.name,
                Articels: newTest.Articels
            })
    }
 })


    $.get("/crud/get", function(data, status){
      var tests=data
    for (var i in tests) {
        addRow(tests[i])
    }
    })
    function addRow(obj) {
        var row = `<tr scope="row" class="test-row-${obj._id}">
                       <td>${obj.name}</td>
                       <td id="result-${obj._id}" data-testid="${obj._id}"">${obj.Articels}</td>
                       <td>
                         <button class="btn btn-sm btn-danger" data-testid=${obj._id} id="delete-${obj._id}">Delete</button>
                         <button class="btn btn-sm btn-info" disabled data-testid="${obj._id}"  id="save-${obj._id}">Save</button>

                         <button class="btn btn-sm btn-danger hidden" data-testid="${obj._id}"  id="cancel-${obj._id}">Cancel</button>
                         <button class="btn btn-sm btn-primary hidden" data-testid="${obj._id}"  id="confirm-${obj._id}">Confirm</button>

                       </td>
                   </tr>`
        $('#tests-table').append(row)

        $(`#delete-${obj._id}`).on('click', deleteTest)
        $(`#cancel-${obj._id}`).on('click', cancelDeletion)
        $(`#confirm-${obj._id}`).on('click', confirmDeletion)
        $(`#save-${obj._id}`).on('click', saveUpdate)


        $(`#result-${obj._id}`).on('click', editResult)

    }

    function editResult() {
        var testid = $(this).data('testid')
        var value = $(this).html()

        $(this).unbind()
        $(this).html(`<input class="result form-control" data-testid="${testid}" type="text" value="${value}">`)
        console.log(value)
        $.ajax({
        url: '/crud/put'+testid,
        type: 'PUT',
        data: {Articels: value},
        dataType: 'json'
    });

        $(`.result`).on('keyup', function () {
            var testid = $(this).data('testid')
            var saveBtn = $(`#save-${testid}`)
            saveBtn.prop('disabled', false)
           // console.log($(`.result`).value)

        })

    }

    function saveUpdate() {
        console.log('Saved!')
        var testid = $(this).data('testid')
        var saveBtn = $(`#save-${testid}`)
        var row = $(`.test-row-${testid}`)

        saveBtn.prop('disabled', true)
        row.css('opacity', "0.5")
        setTimeout(function () {
            row.css('opacity', '1')
        }, 2000)
        console.log(testid)
        console.log(saveBtn)
        console.log(row)
        

    }

    function deleteTest() {
        var testid = $(this).data('testid')

        var deleteBtn = $(`#delete-${testid}`)
        var saveBtn = $(`#save-${testid}`)
        var cancelBtn = $(`#cancel-${testid}`)
        var confirmBtn = $(`#confirm-${testid}`)

        deleteBtn.addClass('hidden')
        saveBtn.addClass('hidden')

        cancelBtn.removeClass('hidden')
        confirmBtn.removeClass('hidden')
    }

    function cancelDeletion() {
        var testid = $(this).data('testid')

        var deleteBtn = $(`#delete-${testid}`)
        var saveBtn = $(`#save-${testid}`)
        var cancelBtn = $(`#cancel-${testid}`)
        var confirmBtn = $(`#confirm-${testid}`)

        deleteBtn.removeClass('hidden')
        saveBtn.removeClass('hidden')

        cancelBtn.addClass('hidden')
        confirmBtn.addClass('hidden')

    }

    function confirmDeletion() {
        var testid = $(this).data('testid')
        var row = $(`.test-row-${testid}`)
        row.remove()
        console.log(testid)
        console.log(row)
        $.ajax({
        url: '/crud/del'+testid,
        type: 'DELETE',
        dataType: 'json'
    });

    }