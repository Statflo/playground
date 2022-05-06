import { useFormik } from "formik";
import { Fragment, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { WidgetType } from "@statflo/textkit-widget-events";
import { useContainer } from "../providers/ContainerProvider";
import Modal from "../components/Modal";
import { Button, Dropdown, FormGroup, TextInput, DropdownOption } from "@statflo/textkit-ui-library";
import PageTitle from "../components/PageTitle";
import classNames from "../utils/classnames";
import { getEnv, getEnvList, scopeOptions, typeOptions } from '../utils/selects';
import { useStorage } from "../providers/StorageProvider";

export default function ManageWidget() {
    const [open, setOpen] = useState<boolean>(false);
    const [envList, setEnvList] = useState<DropdownOption[]>([
        { id: '0', label: 'Select Environment', value: '0' }
    ]);
    const { setNotification } = useContainer();
    const { envs, dispatch, widgets } = useStorage();
    const form = useFormik({
        initialValues: {
            id: '',
            env_id: envList[0],
            name: '',
            type: typeOptions[2],
            scope: scopeOptions[1],
            url: '',
            domain: '',
            order: 0,
            enabled: true,
        },
        onSubmit: values => {
            dispatch({ 
                type: 'widget/register', 
                payload: {
                    ...values,
                    env_id: values.env_id.id,
                    type: values.type.value,
                    scope: values.scope.value
                }
            });
            setNotification({
                title: 'Successfully saved!',
                message: 'Widget has been added.'
            });
            handleClearForm();
        }
    });

    useEffect(() => {
        const list = getEnvList(envs);

        if (list.length > 0) {
            form.setFieldValue('env_id', list[0]);
        }

        setEnvList(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [envs]);

    const handleAddWidget = () => {
        form.resetForm();
        form.setFieldValue('id', uuid());
        setOpen(true);
    }

    const handleClearForm = () => {
        setOpen(false);
        form.resetForm();
    }

    const handleEditWidget = (key: string) => {
        form.setFieldValue('id', widgets[key].id);
        form.setFieldValue('env_id', getEnv(widgets[key].env_id, envList));
        form.setFieldValue('name', widgets[key].name);
        form.setFieldValue('type', typeOptions.filter(item => item.value === widgets[key].type)[0]);
        form.setFieldValue('scope', scopeOptions.filter(item => item.value === widgets[key].scope)[0]);
        form.setFieldValue('url', widgets[key].url);
        form.setFieldValue('domain', widgets[key].domain);
        form.setFieldValue('order', widgets[key].order);
        form.setFieldValue('enabled', widgets[key].enabled);
        setOpen(true);
    }

    const handleDeleteWidget = (key: string) => {
        dispatch({
            type: 'widget/delete',
            payload: key
        });
        setNotification({
            title: 'Successfully deleted!',
            message: 'Widget has been deleted.'
        });
        handleClearForm();
    }

    const toggleWidgetVisibility = (key: string, visible: boolean) => {
        dispatch({
            type: 'widget/visibility',
            payload: {
                key, visible
            }
        });
    }

    return (
        <Fragment>
            <div className="inline-block min-w-full align-middle space-y-6">
                <PageTitle 
                    title="Manage Widgets"
                    description="A list of widgets added to the playground."
                    label="Add Widget"
                    onClick={handleAddWidget}
                />
                <div className="-mx-4 mt-10 ring-1 ring-gray-spacer sm:-mx-6 md:mx-0 md:rounded-lg bg-white overflow-hidden shadow-md">
                    <div>
                        Filters here
                    </div>
                    <table className="min-w-full divide-y divide-gray-spacer">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-default sm:pl-6">
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-default lg:table-cell"
                                >
                                    Environment
                                </th>
                                <th
                                    scope="col"
                                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-default lg:table-cell"
                                >
                                    Type
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Select</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(widgets).map((key, index) => (
                                <tr key={key}>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-transparent',
                                            'relative py-4 pl-4 sm:pl-6 pr-3 text-sm'
                                        )}
                                    >
                                        <div className="font-medium text-gray-default">
                                            {widgets[key].name}<br />
                                            <span className="text-sm font-normal text-gray-500">{widgets[key].url}</span>
                                        </div>
                                        {index !== 0 ? <div className="absolute right-0 left-6 -top-px h-px bg-gray-spacer" /> : null}
                                    </td>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-gray-spacer',
                                            'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                        )}
                                    >
                                        {getEnv(widgets[key].env_id, envList)?.label ?? 'Unknown'}
                                    </td>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-gray-spacer',
                                            'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                        )}
                                    >
                                        {widgets[key].type}
                                    </td>
                                    <td
                                        className={classNames(
                                            index === 0 ? '' : 'border-t border-transparent',
                                            'relative py-3.5 pl-3 pr-4 sm:pr-6 text-right text-sm font-medium space-x-3'
                                        )}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggleWidgetVisibility(key, widgets[key].enabled)}
                                            className="inline-flex items-center rounded-md border border-gray-spacer bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-default shadow-sm hover:bg-gray-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            {widgets[key].enabled ? 'Disable' : 'Enable'}<span className="sr-only"></span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleEditWidget(key)}
                                            className="inline-flex items-center rounded-md border border-gray-spacer bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-default shadow-sm hover:bg-gray-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            Edit<span className="sr-only"></span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteWidget(key)}
                                            className="inline-flex items-center rounded-md border border-gray-spacer bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-default shadow-sm hover:bg-gray-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                        >
                                            Delete<span className="sr-only"></span>
                                        </button>
                                        {index !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-spacer" /> : null}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                title="Widget"
                open={open}
                setOpen={setOpen}
            >
                <form onSubmit={form.handleSubmit} className="space-y-2">
                    <FormGroup label="Environment" required>
                        <Dropdown 
                            selected={form.values.env_id}
                            options={envList}
                            onChange={opts => form.setFieldValue('env_id', opts)}
                        />
                    </FormGroup>
                    <FormGroup label="Name" required>
                        <TextInput
                            autoFocus
                            required
                            value={form.values.name}
                            onChange={form.handleChange('name')}
                        />
                    </FormGroup>
                    <FormGroup label="URL" required>
                        <TextInput
                            required
                            value={form.values.url}
                            onChange={form.handleChange('url')}
                        />
                    </FormGroup>
                    <FormGroup label="Domain" required>
                        <TextInput
                            required
                            value={form.values.domain}
                            onChange={form.handleChange('domain')}
                        />
                    </FormGroup>
                    <div className="grid grid-cols-2 gap-3">
                        <FormGroup label="Type" required>
                            <Dropdown 
                                    selected={form.values.type}
                                options={typeOptions}
                                onChange={opts => form.setFieldValue('type', opts)}
                            />
                        </FormGroup>
                        <FormGroup label="Scope" required>
                            <Dropdown
                                    selected={form.values.scope}
                                options={scopeOptions}
                                onChange={opts => form.setFieldValue('scope', opts)}
                            />
                        </FormGroup>
                    </div>
                    {form.values.type.value !== WidgetType.Timeline && 
                        <FormGroup label="Sort Order" required>
                            <TextInput
                                type="number"
                                required
                                value={form.values.order}
                                onChange={form.handleChange('order')}
                            />
                        </FormGroup>
                    }
                    <div className="space-x-2">
                        <Button type="submit">Save</Button>
                        <Button onClick={handleClearForm} type="button" reversed>Cancel</Button>
                    </div>
                </form>
            </Modal>
        </Fragment>
    )
}